export const usePrint = () => {
  const printRef = React.useRef();

  const handlePrint = () => {
    if (printRef.current) {
      const printWindow = window.open('', '', 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0');
      printWindow.document.write(printRef.current.innerHTML);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return { printRef, handlePrint };
};
