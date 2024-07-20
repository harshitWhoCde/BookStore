import React from 'react'

function Cards({item}) {
  return (
    <>
    <div>
      <div className="card bg-base-100 w-64 shadow-xl overflow-y-auto dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Books!
      <div className="badge badge-secondary">{item.Categories}</div>
    </h2>
    <p>{item.dec}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
