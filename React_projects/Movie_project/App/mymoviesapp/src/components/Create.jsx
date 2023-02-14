import React from 'react'

export const Create = () => {
  return (
        <div className="add">
            <h3 className="title">Add movie</h3>
            <form>
                <input type="text" aria-placeholder="Title"/>
                <textarea placeholder="Description"></textarea>
                <input type="submit"/>
            </form>
        </div>
  )
}
