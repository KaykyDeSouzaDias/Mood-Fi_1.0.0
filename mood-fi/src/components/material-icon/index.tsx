import { useEffect, useState } from 'react'

import { Box, Skeleton, Sx } from '@mantine/core'

import { useWsStyle } from 'theme'

type IconType = 'outlined' | 'rounded' | 'sharp'
type IconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700
type IconGrade = -25 | 0 | 200
type OpticalSize = 20 | 24 | 40 | 48

export interface MaterialIconProps extends OptionalIconProps, StyleIconProps {
	iconName: string
}

interface OptionalIconProps {
	type?: IconType
	size?: number
	color?: string
}

interface StyleIconProps {
	filled?: boolean
	weight?: IconWeight
	grade?: IconGrade
	opticalSize?: OpticalSize
	defaultCursor?: boolean
	sx?: Sx
	className?: string
}

export const MaterialIcon = ({
	iconName,
	type = 'outlined',
	filled = false,
	weight = 400,
	grade = 0,
	opticalSize = 48,
	size = 24,
	defaultCursor = false,
	sx,
	className,
	color,
}: MaterialIconProps) => {
	const styles = getStyles({
		filled,
		weight,
		grade,
		opticalSize,
		defaultCursor: defaultCursor,
	})

	const [_document, set_document] = useState<Document | null>(null)
	const [fontLoading, setFontLoading] = useState(true)

	const checkFontLoad = () => {
		if (typeof window !== 'undefined') {
			_document?.fonts.ready.then(() => {
				setFontLoading(
					!_document?.fonts.check(`12px "Material Symbols Outlined"`),
				)
			})
		}
	}

	useEffect(() => {
		set_document(document)
		checkFontLoad()
	}, [])

	return (
		<Box className={className} sx={sx}>
			<Skeleton visible={false} radius={6} width={size} height={size}>
				<div
					style={{
						...styles.p.icon,
						width: `${size}px`,
						height: `${size}px`,
					}}
				>
					<span
						className={`material-symbols-${type}`}
						style={{
							fontSize: `${size}px`,
							color: color,
						}}
					>
						{iconName}
					</span>
				</div>
			</Skeleton>
		</Box>
	)
}

const getStyles = ({
	filled,
	weight,
	grade,
	opticalSize,
	defaultCursor,
}: StyleIconProps) =>
	useWsStyle(() => {
		const fillValue = filled ? 1 : 0
		return {
			icon: {
				fontVariationSettings: `'FILL' ${fillValue}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
				userSelect: 'none',
				cursor: defaultCursor ? 'default' : '',
			},
		}
	})
