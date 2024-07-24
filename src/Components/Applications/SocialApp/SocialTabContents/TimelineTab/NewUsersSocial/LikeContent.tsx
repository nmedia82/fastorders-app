import React from 'react'

export default function LikeContent() {
    return (
        <div className="like-content">
            <span>
                <i className="fa fa-heart font-danger"></i>
            </span>
            <span className="pull-right comment-number">
                <span>{"20 "}</span>
                <span>
                    <i className="fa fa-share-alt me-0"></i>
                </span>
            </span>
            <span className="pull-right comment-number">
                <span>{"10 "}</span>
                <span>
                    <i className="fa fa-comments-o"></i>
                </span>
            </span>
        </div>
    )
}
