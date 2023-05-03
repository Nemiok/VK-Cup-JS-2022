import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MessageOpenedAddress.css';

const MessageOpenedAddress = (props) => {
  const [isAddresseesHidden, setIsAddresseesHidden] = useState(false);
  useEffect(() => {
    props.formattedArrayOfAddressees.length > 4 ? setIsAddresseesHidden(true) : setIsAddresseesHidden(false);
  }, [props.formattedArrayOfAddressees]);

  return (
    <>
      {isAddresseesHidden ?
        <span className='message-header__addressees'>Кому: {props.formattedArrayOfAddressees.slice(0, 4)}
          <span onClick={() => setIsAddresseesHidden(false)} className='message-header__hidden-addressees'>ещё {props.formattedArrayOfAddressees.length - 4} получателей</span>
        </span> :
        <span className='message-header__addressees'>Кому: {props.formattedArrayOfAddressees}</span>}
    </>
  );
};

export default MessageOpenedAddress;

MessageOpenedAddress.propTypes = {
  formattedArrayOfAddressees: PropTypes.array.isRequired,
};
