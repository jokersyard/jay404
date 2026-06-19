export const Stepper = ({ steps = [], activeStep = 0, className = '' }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, idx) => (
        <div key={idx} className="flex-1 flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              idx <= activeStep
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-700 text-slate-400'
            }`}
          >
            {idx + 1}
          </div>
          {idx < steps.length - 1 && (
            <div className={`flex-1 h-1 mx-2 ${idx < activeStep ? 'bg-indigo-600' : 'bg-slate-700'}`} />
          )}
        </div>
      ))}
    </div>
  );
};
