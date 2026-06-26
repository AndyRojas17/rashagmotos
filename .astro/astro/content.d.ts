declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"clientes": {
"cliente-01.md": {
	id: "cliente-01.md";
  slug: "cliente-01";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-02.md": {
	id: "cliente-02.md";
  slug: "cliente-02";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-03.md": {
	id: "cliente-03.md";
  slug: "cliente-03";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-04.md": {
	id: "cliente-04.md";
  slug: "cliente-04";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-05.md": {
	id: "cliente-05.md";
  slug: "cliente-05";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-06.md": {
	id: "cliente-06.md";
  slug: "cliente-06";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-07.md": {
	id: "cliente-07.md";
  slug: "cliente-07";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-08.md": {
	id: "cliente-08.md";
  slug: "cliente-08";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-09.md": {
	id: "cliente-09.md";
  slug: "cliente-09";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
"cliente-10.md": {
	id: "cliente-10.md";
  slug: "cliente-10";
  body: string;
  collection: "clientes";
  data: any
} & { render(): Render[".md"] };
};
"financiamiento": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "financiamiento";
  data: any
} & { render(): Render[".md"] };
};
"galeria": {
"foto-01.md": {
	id: "foto-01.md";
  slug: "foto-01";
  body: string;
  collection: "galeria";
  data: any
} & { render(): Render[".md"] };
"foto-02.md": {
	id: "foto-02.md";
  slug: "foto-02";
  body: string;
  collection: "galeria";
  data: any
} & { render(): Render[".md"] };
"foto-03.md": {
	id: "foto-03.md";
  slug: "foto-03";
  body: string;
  collection: "galeria";
  data: any
} & { render(): Render[".md"] };
"foto-04.md": {
	id: "foto-04.md";
  slug: "foto-04";
  body: string;
  collection: "galeria";
  data: any
} & { render(): Render[".md"] };
"foto-05.md": {
	id: "foto-05.md";
  slug: "foto-05";
  body: string;
  collection: "galeria";
  data: any
} & { render(): Render[".md"] };
"foto-06.md": {
	id: "foto-06.md";
  slug: "foto-06";
  body: string;
  collection: "galeria";
  data: any
} & { render(): Render[".md"] };
};
"local": {
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "local";
  data: any
} & { render(): Render[".md"] };
};
"marcas": {
"advance.md": {
	id: "advance.md";
  slug: "advance";
  body: string;
  collection: "marcas";
  data: any
} & { render(): Render[".md"] };
"hero.md": {
	id: "hero.md";
  slug: "hero";
  body: string;
  collection: "marcas";
  data: any
} & { render(): Render[".md"] };
"katers.md": {
	id: "katers.md";
  slug: "katers";
  body: string;
  collection: "marcas";
  data: any
} & { render(): Render[".md"] };
"motofox.md": {
	id: "motofox.md";
  slug: "motofox";
  body: string;
  collection: "marcas";
  data: any
} & { render(): Render[".md"] };
"polux.md": {
	id: "polux.md";
  slug: "polux";
  body: string;
  collection: "marcas";
  data: any
} & { render(): Render[".md"] };
"ssenda.md": {
	id: "ssenda.md";
  slug: "ssenda";
  body: string;
  collection: "marcas";
  data: any
} & { render(): Render[".md"] };
};
"motos": {
"moto-01.md": {
	id: "moto-01.md";
  slug: "moto-01";
  body: string;
  collection: "motos";
  data: any
} & { render(): Render[".md"] };
"moto-02.md": {
	id: "moto-02.md";
  slug: "moto-02";
  body: string;
  collection: "motos";
  data: any
} & { render(): Render[".md"] };
"moto-03.md": {
	id: "moto-03.md";
  slug: "moto-03";
  body: string;
  collection: "motos";
  data: any
} & { render(): Render[".md"] };
"moto-04.md": {
	id: "moto-04.md";
  slug: "moto-04";
  body: string;
  collection: "motos";
  data: any
} & { render(): Render[".md"] };
"moto-05.md": {
	id: "moto-05.md";
  slug: "moto-05";
  body: string;
  collection: "motos";
  data: any
} & { render(): Render[".md"] };
"moto-06.md": {
	id: "moto-06.md";
  slug: "moto-06";
  body: string;
  collection: "motos";
  data: any
} & { render(): Render[".md"] };
"moto-07.md": {
	id: "moto-07.md";
  slug: "moto-07";
  body: string;
  collection: "motos";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
