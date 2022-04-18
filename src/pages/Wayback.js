import { useEffect, useRef } from "react";
import { useQueryParams } from "../util/useQueryParams";

const Wayback = () => {
  const params = useQueryParams();
  const src = params.get("path") || 'https://andrew.mn/';
  const iframeRef = useRef();

  useEffect(() => {
    console.log('REF', iframeRef.current)
    const handler = (e) => console.log('UNLOAD', e)
    iframeRef.current.contentWindow.addEventListener("unload", handler);

    return iframeRef.current.contentWindow.removeEventListener("unload", handler)
  }, [iframeRef.current]);

  if (!src.includes('andrew.mn')) {
    return <>Can't load</>
  }

  return (
    <iframe
        src={src}
        ref={iframeRef}
        style={{
          border: 0,
          height: 'calc(100vh - 68px)',
          width: '100vw'
        }}
      />
  );
};


export default Wayback;
