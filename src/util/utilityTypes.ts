export interface OverridableTypeMap {
  props: {};
  defaultComponent: React.ElementType;
}

export type DefaultComponentProps<TTypeMap extends OverridableTypeMap> = TTypeMap['props'] &
  Omit<React.ComponentPropsWithRef<TTypeMap['defaultComponent']>, keyof TTypeMap['props']>;

export type OverrideProps<
  TTypeMap extends OverridableTypeMap,
  TElementType extends React.ElementType,
> = TTypeMap['props'] & Omit<React.ComponentPropsWithRef<TElementType>, keyof TTypeMap['props']>;

export interface OverridableComponent<TTypeMap extends OverridableTypeMap> {
  <TElementType extends React.ElementType>(
    props: {
      as: TElementType;
    } & OverrideProps<TTypeMap, TElementType>,
  ): JSX.Element;
  (props: DefaultComponentProps<TTypeMap>): JSX.Element;
}

export interface TypeMap<HTMLAttributes = {}, TElementType extends React.ElementType = 'div'> {
  props: HTMLAttributes;
  defaultComponent: TElementType;
}

export type OverrideStyleProps<
  StyleProps extends {} = {},
  TElementType extends React.ElementType = 'div',
> = OverrideProps<
  {
    props: StyleProps;
    defaultComponent: TElementType;
  },
  TElementType
>;

export type OverrideComponent<
  StyleProps extends {} = {},
  TElemntType extends React.ElementType = 'p',
> = OverridableComponent<{
  props: StyleProps;
  defaultComponent: TElemntType;
}>;

export type Size = 'sm' | 'md' | 'lg';
