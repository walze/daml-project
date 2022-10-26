export default ({ label }: { label?: string }) => (
  <div
    data-label={label}
    className="my-20 flex justify-center items-center"
  >
    <div
      className="border-gray-900 spinner-border border border-t-8 animate-spin inline-block w-16 h-16 rounded-full"
      role="status"
    >
      <span className="hidden">Loading...</span>
    </div>
  </div>
);
