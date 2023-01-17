import MetaManager, {
  MetaAttributes,
  MetaManagerRecord,
  MetaManagerRecordNames,
  MetaValue,
} from './MetaManager';

/**
 * Default implementation of the {@link MetaManager} interface.
 */
export default class MetaManagerImpl extends MetaManager {
  protected _title: string;
  protected _metaName: Map<string, MetaManagerRecord<'content'>>;
  protected _metaProperty: Map<string, MetaManagerRecord<'property'>>;
  protected _link: Map<string, MetaManagerRecord<'href'>>;

  static get $dependencies() {
    return [];
  }

  /**
   * Initializes the meta page attributes manager.
   */
  constructor() {
    super();

    /**
     * The page title.
     */
    this._title = '';

    /**
     * Storage of generic meta information.
     */
    this._metaName = new Map();

    /**
     * Storage of specialized meta information.
     */
    this._metaProperty = new Map();

    /**
     * Storage of generic link information.
     */
    this._link = new Map();
  }

  /**
   * @inheritDoc
   */
  setTitle(title: string): void {
    this._title = title;
  }

  /**
   * @inheritDoc
   */
  getTitle(): string {
    return this._title;
  }

  /**
   * @inheritDoc
   */
  setMetaName(name: string, content: MetaValue, attr?: MetaAttributes): void {
    this._metaName.set(name, this.#createRecord('content', content, attr));
  }

  /**
   * @inheritDoc
   */
  getMetaName(name: string): MetaManagerRecord<'content'> {
    return this._metaName.get(name) || super.getMetaName(name);
  }

  /**
   * @inheritDoc
   */
  getMetaNames(): string[] {
    return Array.from(this._metaName.keys());
  }

  /**
   * @inheritDoc
   */
  getMetaNamesIterator(): IterableIterator<
    [string, MetaManagerRecord<'content'>]
  > {
    return this._metaName.entries();
  }

  /**
   * @inheritDoc
   */
  setMetaProperty(
    name: string,
    property: MetaValue,
    attr?: MetaAttributes
  ): void {
    this._metaProperty.set(
      name,
      this.#createRecord('property', property, attr)
    );
  }

  /**
   * @inheritDoc
   */
  getMetaProperty(name: string): MetaManagerRecord<'property'> {
    return this._metaProperty.get(name) || super.getMetaProperty(name);
  }

  /**
   * @inheritDoc
   */

  getMetaProperties(): string[] {
    return Array.from(this._metaProperty.keys());
  }

  /**
   * @inheritDoc
   */
  getMetaPropertiesIterator(): IterableIterator<
    [string, MetaManagerRecord<'property'>]
  > {
    return this._metaProperty.entries();
  }

  /**
   * @inheritDoc
   */
  setLink(relation: string, href: MetaValue, attr?: MetaAttributes): void {
    this._link.set(relation, this.#createRecord('href', href, attr));
  }

  /**
   * @inheritDoc
   */
  getLink(relation: string): MetaManagerRecord<'href'> {
    return this._link.get(relation) || super.getLink(relation);
  }

  /**
   * @inheritDoc
   */
  getLinks(): string[] {
    return Array.from(this._link.keys());
  }

  /**
   * @inheritDoc
   */
  getLinksIterator(): IterableIterator<[string, MetaManagerRecord<'href'>]> {
    return this._link.entries();
  }

  /**
   * @inheritdoc
   */
  clearMetaAttributes(): void {
    this._metaProperty.clear();
    this._metaName.clear();
    this._link.clear();
  }

  #createRecord<R extends MetaManagerRecordNames>(
    valueName: MetaManagerRecordNames,
    value: MetaValue,
    attr?: MetaAttributes
  ): MetaManagerRecord<R> {
    return attr
      ? ({ [valueName]: value, ...attr } as unknown as MetaManagerRecord<R>)
      : value;
  }
}
