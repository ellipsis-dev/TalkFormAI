import React from 'react';

export default function ClosedForm() {
  return (
    <div>
      <p>This form is no longer accepting responses. If you believe this is an error, contact the form author.</p>
      <button onClick={() => window.location.href='https://talkform.ai/'}>Go to TalkForm.ai</button>
    </div>
  );
}