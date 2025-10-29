// export const IconName = [
// add icons name list
// ] as const
export type TIconName = string

export const IconVariant = ['solid', 'outline', 'bicolor', 'mini'] as const
export type TIconVariant = (typeof IconVariant)[number]

export const IconCollection = ['hero', 'simple', 'duotone'] as const
export type TIconCollection = (typeof IconCollection)[number]

export const IconDirectionLR = ['left', 'right'] as const
export type TIconDirectionLR = (typeof IconDirectionLR)[number]
