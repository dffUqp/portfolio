import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeSummaryFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Symbol;
}

export type TypeSummarySkeleton = EntrySkeletonType<
  TypeSummaryFields,
  'summary'
>;
export type TypeSummary<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSummarySkeleton, Modifiers, Locales>;
export type TypeSummaryWithoutLinkResolutionResponse =
  TypeSummary<'WITHOUT_LINK_RESOLUTION'>;
export type TypeSummaryWithoutUnresolvableLinksResponse =
  TypeSummary<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeSummaryWithAllLocalesResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSummary<'WITH_ALL_LOCALES', Locales>;
export type TypeSummaryWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSummary<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeSummaryWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSummary<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
