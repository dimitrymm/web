import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas';


export function ScreenshotButton() {
  async function handleTakeScreenshot() {
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    console.log(base64image);

  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      <Camera className="w-6 h-6" />
    </button>

  )
}