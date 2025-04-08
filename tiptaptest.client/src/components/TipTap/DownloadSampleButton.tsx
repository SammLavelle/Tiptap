import { useCurrentEditor } from "@tiptap/react";

const DownloadSampleButton = () => {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }

  const contentHTML = editor.getHTML();

  const downloadPdf = async () => {
    try {
      const response = await fetch('/api/pdf/DownloadPdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contentHTML),
      });

      if (response.ok) {
        const pdfBlob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(pdfBlob);
        link.download = 'generated.pdf';
        link.click();
      } else {
        console.error('Failed to generate PDF');
      }
    } catch (error) {
      console.error('Error during PDF generation:', error);
    }
  };

  return (
    <button onClick={downloadPdf}>Download Pdf Sample</button>
  );
};

export default DownloadSampleButton;
