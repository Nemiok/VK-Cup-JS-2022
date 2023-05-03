import JSZip from 'jszip';
import FileSaver from 'file-saver';

export const b64toBlob = (b64Data, contentType = 'text/plain', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const saveZip = (urls) => {
  if (!urls) return;

  const download = (url) => {
    return fetch(url).then((resp) => resp.blob());
  };

  const downloadMany = (urls) => {
    return Promise.all(urls.map((url) => download(url)));
  };

  const exportZip = (blobs) => {
    const zip = new JSZip();
    blobs.forEach((blob, i) => {
      zip.file(`file-${i}.jpg`, blob);
    });
    zip.generateAsync({ type: 'blob' }).then((zipFile) => {
      const currentDate = new Date().getTime();
      const fileName = `combined-${currentDate}.zip`;
      return FileSaver.saveAs(zipFile, fileName);
    });
  };

  return downloadMany(urls).then(exportZip);
};

export const uid = () => {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, '');
};
