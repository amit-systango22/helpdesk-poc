import { useEffect } from "react";

const FreshDeskWidget = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ind-widget.freshworks.com/widgets/1060000000858.js';
    script.async = true;
    script.defer = true;

    const additionalScript = document.createElement('script');
    additionalScript.type = 'text/javascript';
    additionalScript.innerHTML = "window.fwSettings = { widget_id: '1060000000858' };";

    document.body.appendChild(additionalScript);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(additionalScript);
      document.body.removeChild(script);
    };
  }, []);



  return null;
};

export default FreshDeskWidget;


  //working code with some console warning
  // useEffect(() => {
  //   const widgetScript = document.createElement('script');
  //   widgetScript.type = 'text/javascript';
  //   widgetScript.src = 'https://ind-widget.freshworks.com/widgets/1060000000858.js';
  //   widgetScript.async = true;
  //   widgetScript.defer = true;

  //   const additionalScript = document.createElement('script');
  //   additionalScript.type = 'text/javascript';
  //   additionalScript.textContent = '5ffccfef1c70f203c0b704fffa52cfe1';

  //   document.body.appendChild(widgetScript);
  //   document.body.appendChild(additionalScript);

  //   window.fwSettings = {
  //     'widget_id': 1060000000858,
  //     'locale': 'en'
  //   };

  //   return () => {
  //     document.body.removeChild(widgetScript);
  //     document.body.removeChild(additionalScript);
  //   };
  // }, []);

