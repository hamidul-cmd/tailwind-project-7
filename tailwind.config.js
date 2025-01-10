/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xll: '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        Urbanist:['Urbanist'],
      },
      colors: {
        green__70:"#CBEA7B",
        green__75:"#D3EE91",
        green__80:"#DCF1A7",
        green__85:"#E5F5BD",
        green__90:"#EEF8D3",
        green__95:"#F6FBE9",
        green__97:"#FAFDF2",
        green__99:"#FDFEFB",
        

        
        dark__green__15:"#1A3129",
        dark__green__20:"#234338",
        dark__green__25:"#2C5446",
        dark__green__30:"#346454",
        dark__green__40:"#468671",
        dark__green__60:"#79B9A4",
        dark__green__80:"#BCDCD1",
        dark__green__90:"#DDEDE8",

        

        gray__10:"#191919",
        gray__15:"#262626",
        gray__20:"#333333",
        gray__30:"#4C4C4D",
        gray__35:"#59595A",
        gray__40:"#656567",
        gray__60:"#98989A",
        gray__90:"#E6E6E6",
        gray__95:"#F2F2F2",
        gray__97:"#F7F7F7",
        gray__99:"#FCFCFC",
      },
      spacing: {
        0.5:'2px',
        1.5: '6px',
        1.9: '9px',
        2.5: '10px',
        3.5: '14px',

        4.5: '16px',
        4.8: '18px',
        6.5: '25px',
        6.6: '26px',
        7.5: '30px',
        10.5: '42px',
        40.2: '162px',
        12.5: '50px',
        14.5: '60px',
        16.5: '70px',
        24.5: '100px',
        36.5: '150px',

      },
      maxWidth: ({ theme, breakpoints }) => ({
        ...theme('spacing'),
        wrapper: '1920px',
        ...breakpoints(theme('screens')),
      }),
      fontSize: {
        fs_22: '1.375rem',
        fs_26: '1.625rem',
        fs_28: '1.75rem',
        fs_38: '2.375rem',
        fs_58: '3.625rem',
        fs_40: '2.5rem',

      },
      lineHeight: {
        15:'150%',
      },
    },
  },
  plugins: [],
}

