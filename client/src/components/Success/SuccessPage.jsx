// export default function SuccessPage() {
//     return <div>Success Page</div>
// };

// import React from 'react';

import './SuccessPage.scss';
const SuccessPage = () => {
  return (
    <div className="success-page">
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been successfully placed.</p>
      <button onClick={() => window.location.href = "/"}>Back to Home</button>
    </div>
  );
}

export default SuccessPage;
