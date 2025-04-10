import SimpleDetailPageServer from '@/src/components/pages/samples/detail/server/SimpleDetailPageServer'
import { AppRouterProps } from '@/src/types/pages/common'

export default async function SamplePage({
	params,
	searchParams,
}: AppRouterProps) {
	console.log(params)
	console.log(searchParams)
	const { id } = await params
	return <SimpleDetailPageServer id={id} />
}
