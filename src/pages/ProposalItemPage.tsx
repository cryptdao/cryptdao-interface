import Layout from '@/layout'
import { daoGetProposal } from '@/near/Function'
import { Skeleton } from 'antd'
import { id } from 'date-fns/locale'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export default function ProposalItemPage() {
  const { slug } = useParams()
  const { isLoading, isError, error, data } = useQuery(['proposal', id], () => {
    if (slug) {
      const id = Number(slug)
      return daoGetProposal(id)
    } else {
      return null
    }
  })

  if (isLoading) {
    return <Skeleton active />
  }
  if (isError) {
    return <span>Error:{error instanceof Error ? error.message : ''}</span>
  }

  console.log(data)
  return (
    <>
      <Layout>
        <div className="flex-1 w-full lg:w-8/12">
          <article className="px-4">
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
          </article>
        </div>

        <div className="flex-1 w-10">
          <div className="mb-4 border-t border-b">
            <div className="block px-4 pt-3 border-b">信息</div>
            <div className="p-4">
              <div className="flex flex-row">
                <div className="flex-1 w-1">策略</div>
                <div className="flex-1 w-1">{data?.kind.type}</div>
              </div>
              <div className="flex flex-row">
                <div className="flex-1 w-1">作者</div>
                <div className="flex-1 w-1">{data?.proposer}</div>
              </div>
              <div className="flex flex-row">
                <div className="flex-1 w-1">开始时间</div>
                <div className="flex-1 w-1">{data?.proposal_start_time}</div>
              </div>
              <div className="flex flex-row">
                <div className="flex-1 w-1">结束时间</div>
                <div className="flex-1 w-1">{data?.proposal_end_time}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
