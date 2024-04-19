const SkeletonDetail = () => {
  return (
    <div>
      <h3 className="font-bold text-lg">Detail</h3>

      <div className="skeleton h-4 w-full mt-2"></div>

      <p className="py-4">
        <div className="skeleton h-4 w-full"></div>
        <div className="flex gap-2 mt-2">
          <div className="skeleton h-4 w-1/3"></div>
          <div className="skeleton h-4 w-1/3"></div>{" "}
          <div className="skeleton h-4 w-1/3"></div>
        </div>
      </p>
      <div className="modal-action">
        <form method="dialog">
          <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
        </form>
      </div>
    </div>
  )
}

export default SkeletonDetail
