function firstFilterStyles(isOpen) {
  return {
    control: provided => ({
      ...provided,
      width: '204px',
      height: '44px',
      borderRadius: '12px',
      cursor: 'pointer',
      marginTop: '8px',
      background: '#f7f7f7',
      padding: '0 16px',
      border: 'none', // Настроить границу
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      },
    }),
    placeholder: provided => ({
      ...provided,
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '1.25',
      color: '#101828',
    }),
    indicatorSeparator: () => ({
      display: 'none', // Убирает разделитель между селектором и стрелкой
    }),
    dropdownIndicator: provided => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      background: `url('/images/chevron-down.svg') no-repeat center`,
      backgroundSize: 'cover',
      color: 'transparent',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: 1.25,
      color: state.isSelected ? '#000' : '#8d929a',
      marginTop: '8px',
      cursor: 'pointer',
      padding: '0',
      '&:firstChild': {
        marginTop: '0',
      },
      '&:active': {
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '1.25',
        color: '#101828',
      },
    }),
    menu: provided => ({
      ...provided,
      width: '204px',
      height: '272px',
      background: '#fff',
      borderRadius: '12px',
      padding: '14px 8px 14px 18px',
      border: '1px solid #f7f7f7',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      margin: '4px 0 0',
    }),
    menuList: provided => ({
      ...provided,
      height: '100%',
      '::-webkit-scrollbar': {
        width: '8px',
        height: '50px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#dadde1',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#BCC3CC',
      },
    }),
  };
}

function secondFilterStyles(isOpen) {
  return {
    control: provided => ({
      ...provided,
      width: '196px',
      height: '44px',
      borderRadius: '12px',
      cursor: 'pointer',
      marginTop: '8px',
      background: '#f7f7f7',
      padding: '0 16px',
      border: 'none', // Настроить границу
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      },
    }),
    placeholder: provided => ({
      ...provided,
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '1.25',
      color: '#101828',
    }),
    indicatorSeparator: () => ({
      display: 'none', // Убирает разделитель между селектором и стрелкой
    }),
    dropdownIndicator: provided => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      background: `url('/images/chevron-down.svg') no-repeat center`,
      backgroundSize: 'cover',
      color: 'transparent',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: 1.25,
      color: state.isSelected ? '#000' : '#8d929a',
      marginTop: '8px',
      cursor: 'pointer',
      padding: '0',
      '&:firstChild': {
        marginTop: '0',
      },
      '&:active': {
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '1.25',
        color: '#101828',
      },
    }),
    menu: provided => ({
      ...provided,
      width: '196px',
      height: '188px',
      background: '#fff',
      borderRadius: '12px',
      padding: '14px 8px 14px 18px',
      border: '1px solid #f7f7f7',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      margin: '4px 0 0',
    }),
    menuList: provided => ({
      ...provided,
      height: '100%',
      '::-webkit-scrollbar': {
        width: '8px',
        height: '100vh',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#dadde1',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#BCC3CC',
      },
    }),
  };
}

function priceOptions() {
  return [
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
    { value: '90', label: '90' },
    { value: '100', label: '100' },
    { value: '110', label: '110' },
    { value: '120', label: '120' },
    { value: '130', label: '130' },
    { value: '140', label: '140' },
    { value: '150', label: '150' },
  ];
}

export function getBrandOptions(brands) {
  return brands?.map(brand => ({
    value: brand,
    label: brand,
  }));
}

export { firstFilterStyles, secondFilterStyles, priceOptions };
