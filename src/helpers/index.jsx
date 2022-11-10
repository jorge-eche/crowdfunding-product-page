export const formatCurrency = currency => {
    return currency.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
  };

  export const formatAmount = amount => {
    return amount.toLocaleString(
        'en', 
        {useGrouping:true
    });
  };

  
