export const Divider = ({ className = '', ...props }) => {
  return (
    <hr className={`border-slate-700 ${className}`} {...props} />
  );
};
