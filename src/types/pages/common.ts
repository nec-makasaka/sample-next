export type PageIdProps = string

export interface AppRouterProps {
	params: {
		id: PageIdProps
	}
	searchParams: { [key: string]: string | string[] | undefined }
}
