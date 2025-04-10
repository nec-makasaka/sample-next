import SimpleDetailPageServer from '@/src/components/pages/samples/detail/server/SimpleDetailPageServer'
import { AppRouterProps } from '@/src/types/pages/common'

export default function SamplePage({ params, searchParams }: AppRouterProps) {
	console.log(params)
	console.log(searchParams)
	return <SimpleDetailPageServer id={params.id} />
}
