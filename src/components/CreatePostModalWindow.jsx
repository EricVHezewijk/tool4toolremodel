import React from 'react'

function CreatePostModalWindow() {
  return (
    <div className='create-post-modal-window-container'>
      <div className='create-post-modal-window-header'>
        <h2 className='create-post-modal-window-header-text'>Request A Tool</h2>
        <button className='close-post-modal-window-btn'>X</button>
      </div>
      <form className='create-post-form'>
        <h4>Tool</h4>
        <input
            type="text"
            placeholder='Enter needed tool'         
        />
        <h4>Description</h4>
        <input
            type="textarea"
            placeholder='Enter text'         
        />
        <h4>Duration (days)</h4>
        <input
            type="number"
        />
        <button className='submit-create-post-button' type="submit"><p>Post</p></button>
      </form>
    </div>
  )
}

export default CreatePostModalWindow