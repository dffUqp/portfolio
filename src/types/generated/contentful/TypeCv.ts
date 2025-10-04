import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeCvFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
}

export type TypeCvSkeleton = EntrySkeletonType<TypeCvFields, 'cv'>;
export type TypeCv<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCvSkeleton, Modifiers, Locales>;
export type TypeCvWithoutLinkResolutionResponse =
  TypeCv<'WITHOUT_LINK_RESOLUTION'>;
export type TypeCvWithoutUnresolvableLinksResponse =
  TypeCv<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeCvWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCv<'WITH_ALL_LOCALES', Locales>;
export type TypeCvWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCv<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeCvWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeCv<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
