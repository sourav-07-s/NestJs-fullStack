
 async function blog({params }: {params: {somethinb: string}}) {
    console.log(params.somethinb)
  return (
    <div>blog</div>
  )
}

export default blog