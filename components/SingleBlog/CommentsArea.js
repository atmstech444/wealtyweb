import React from "react";
import Link from "next/link";

const CommentsArea = () => {
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">05 Comments</h3>

        <ol className="comment-list">
          <li className="comment">
            <article className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <img
                    src="/images/author1.jpg"
                    className="avatar"
                    alt="image"
                  />
                  <b className="fn">James Anderson</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <time>April 24, 2022 at 10:59 am</time>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className="reply">
                <Link href="#">
                  Reply
                </Link>
              </div>
            </article>

            <ol className="children">
              <li className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <img
                        src="/images/author2.jpg"
                        className="avatar"
                        alt="image"
                      />
                      <b className="fn">Steven Smith</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      <time>April 24, 2022 at 10:59 am</time>
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Lorem Ipsum has been the industry’s standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book.
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#">
                      Reply
                    </Link>
                  </div>
                </article>
              </li>

              <ol className="children">
                <li className="comment">
                  <article className="comment-body">
                    <footer className="comment-meta">
                      <div className="comment-author vcard">
                        <img
                          src="/images/author3.jpg"
                          className="avatar"
                          alt="image"
                        />
                        <b className="fn">Sarah Taylor</b>
                        <span className="says">says:</span>
                      </div>

                      <div className="comment-metadata">
                        <time>April 24, 2022 at 10:59 am</time>
                      </div>
                    </footer>

                    <div className="comment-content">
                      <p>
                        Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>

                    <div className="reply">
                      <Link href="#">
                        Reply
                      </Link>
                    </div>
                  </article>
                </li>
              </ol>
            </ol>
          </li>

          <li className="comment">
            <article className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <img
                    src="/images/author2.jpg"
                    className="avatar"
                    alt="image"
                  />
                  <b className="fn">John Doe</b>
                  <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                  <time>April 24, 2022 at 10:59 am</time>
                </div>
              </footer>

              <div className="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className="reply">
                <Link href="#">
                  Reply
                </Link>
              </div>
            </article>

            <ol className="children">
              <li className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <img
                        src="/images/author4.jpg"
                        className="avatar"
                        alt="image"
                      />
                      <b className="fn">James Anderson</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      <time>April 24, 2022 at 10:59 am</time>
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Lorem Ipsum has been the industry’s standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book.
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#">
                      Reply
                    </Link>
                  </div>
                </article>
              </li>
            </ol>
          </li>
        </ol>

        <div className="comment-respond">
          <h3 className="comment-reply-title">Leave a Reply</h3>

          <form className="comment-form">
            <div className="comment-notes">
              <span id="email-notes">
                Your email address will not be published.
              </span>
              Required fields are marked
              <span className="required">*</span>
            </div>

            <div className="comment-form-comment">
              <label>Comment</label>
              <textarea
                name="comment"
                id="comment"
                rows="5"
                required="required"
              ></textarea>
            </div>

            <div className="comment-form-author">
              <label>
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required="required"
              />
            </div>

            <div className="comment-form-email">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required="required" />
            </div>

            <div className="comment-form-url">
              <label>Website</label>
              <input type="url" id="url" name="url" />
            </div>

            <div className="comment-form-cookies-consent">
              <input
                type="checkbox"
                value="yes"
                name="comment-cookies-consent"
                id="comment-cookies-consent"
              />
              <label>
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            <div className="form-submit">
              <input
                type="submit"
                name="submit"
                id="submit"
                className="submit"
                value="Post a Comment"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentsArea;
