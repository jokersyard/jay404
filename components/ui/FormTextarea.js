import { Textarea } from './Textarea';

export const FormTextarea = ({ 
  label, 
  error, 
  required = false,
  className = '',
  rows = 4,
  ...props 
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-slate-200 mb-2">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Textarea error={!!error} rows={rows} {...props} />
      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};
