export type PageIdProps = string

export interface AppRouterProps {
	params: Promise<{ slug: PageIdProps }>
	searchParams: { [key: string]: string | string[] | undefined }
}
