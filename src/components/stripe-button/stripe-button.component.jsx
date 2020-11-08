import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hl8JPDK6aPISkIgVosRtQSkC7j8JxEWeOqak85jnoq3LhRDPHhC15RzewYd9xRftMyBSzsXUhNQDNjPydKVvrj100KxTvT1zi';

  const onToken = token => {
    // Processes payment - passed to backend
    console.log('Payment Successful', token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Ltd.'
      shippingAddress
      billingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken} // On success callback
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
