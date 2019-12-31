import React from 'react';

const Publish = () => {
    return (
        <div>
            <form action="/api/publish">
                <label htmlFor="title">标题</label>
                <input type="text" name="title" id="title"/>
                <label htmlFor="content">正文</label>
                <input type="text" name="article" id="article"/>
                <button type="submit">提交</button>
            </form>
        </div>
    )
}

export default Publish;