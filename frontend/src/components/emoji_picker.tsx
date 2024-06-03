import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EmojiPickerComponent = ({ onSelect }) => {
    const [showPicker, setShowPicker] = useState(false);
    EmojiPickerComponent.propTypes = {
        onSelect: PropTypes.func.isRequired,
    };
    const handleEmojiSelect = (emoji: any) => {
        onEmojiSelect(emoji);
        setShowPicker(false);
    };

    return (
        <div>
            <button onClick={() => setShowPicker(!showPicker)}>😊</button>
            {showPicker && <EmojiPicker onSelect={onSelect} />}
        </div>
    );
};

export default EmojiPickerComponent;
