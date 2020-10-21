/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  /** DateTime */
  PRISMIC_DateTime: any;
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  PRISMIC_Long: any;
  /** Raw JSON value */
  PRISMIC_Json: any;
  JSON: never;
};











type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  url = 'url',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type GraphQLSourcePRISMIC = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
};

type GraphQLSourcePRISMICConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourcePRISMICEdge>;
  readonly nodes: ReadonlyArray<GraphQLSourcePRISMIC>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphQLSourcePRISMICGroupConnection>;
};


type GraphQLSourcePRISMICConnection_distinctArgs = {
  field: GraphQLSourcePRISMICFieldsEnum;
};


type GraphQLSourcePRISMICConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphQLSourcePRISMICFieldsEnum;
};

type GraphQLSourcePRISMICEdge = {
  readonly next: Maybe<GraphQLSourcePRISMIC>;
  readonly node: GraphQLSourcePRISMIC;
  readonly previous: Maybe<GraphQLSourcePRISMIC>;
};

enum GraphQLSourcePRISMICFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  typeName = 'typeName',
  fieldName = 'fieldName'
}

type GraphQLSourcePRISMICFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
};

type GraphQLSourcePRISMICGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourcePRISMICEdge>;
  readonly nodes: ReadonlyArray<GraphQLSourcePRISMIC>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphQLSourcePRISMICSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphQLSourcePRISMICFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Maybe<Scalars['Int']>;
  readonly presentationHeight: Maybe<Scalars['Int']>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Maybe<Scalars['Int']>;
  readonly presentationHeight: Maybe<Scalars['Int']>;
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type PRISMIC = {
  readonly _allDocuments: PRISMIC__DocumentConnection;
  readonly allHomeminimals: PRISMIC_HomeminimalConnectionConnection;
  readonly allHomes: PRISMIC_HomeConnectionConnection;
  readonly allCommons: PRISMIC_CommonConnectionConnection;
  readonly category: Maybe<PRISMIC_Category>;
  readonly allCategorys: PRISMIC_CategoryConnectionConnection;
  readonly allHomemoderns: PRISMIC_HomemodernConnectionConnection;
};


type PRISMIC__allDocumentsArgs = {
  sortBy: Maybe<PRISMIC_SortDocumentsBy>;
  id: Maybe<Scalars['String']>;
  id_in: Maybe<ReadonlyArray<Scalars['String']>>;
  uid: Maybe<Scalars['String']>;
  uid_in: Maybe<ReadonlyArray<Scalars['String']>>;
  lang: Maybe<Scalars['String']>;
  tags: Maybe<ReadonlyArray<Scalars['String']>>;
  tags_in: Maybe<ReadonlyArray<Scalars['String']>>;
  type: Maybe<Scalars['String']>;
  type_in: Maybe<ReadonlyArray<Scalars['String']>>;
  firstPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  fulltext: Maybe<Scalars['String']>;
  similar: Maybe<PRISMIC_similar>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type PRISMIC_allHomeminimalsArgs = {
  sortBy: Maybe<PRISMIC_SortHomeminimaly>;
  id: Maybe<Scalars['String']>;
  id_in: Maybe<ReadonlyArray<Scalars['String']>>;
  uid: Maybe<Scalars['String']>;
  uid_in: Maybe<ReadonlyArray<Scalars['String']>>;
  lang: Maybe<Scalars['String']>;
  tags: Maybe<ReadonlyArray<Scalars['String']>>;
  tags_in: Maybe<ReadonlyArray<Scalars['String']>>;
  type: Maybe<Scalars['String']>;
  type_in: Maybe<ReadonlyArray<Scalars['String']>>;
  firstPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  fulltext: Maybe<Scalars['String']>;
  similar: Maybe<PRISMIC_similar>;
  where: Maybe<PRISMIC_WhereHomeminimal>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type PRISMIC_allHomesArgs = {
  sortBy: Maybe<PRISMIC_SortHomey>;
  id: Maybe<Scalars['String']>;
  id_in: Maybe<ReadonlyArray<Scalars['String']>>;
  uid: Maybe<Scalars['String']>;
  uid_in: Maybe<ReadonlyArray<Scalars['String']>>;
  lang: Maybe<Scalars['String']>;
  tags: Maybe<ReadonlyArray<Scalars['String']>>;
  tags_in: Maybe<ReadonlyArray<Scalars['String']>>;
  type: Maybe<Scalars['String']>;
  type_in: Maybe<ReadonlyArray<Scalars['String']>>;
  firstPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  fulltext: Maybe<Scalars['String']>;
  similar: Maybe<PRISMIC_similar>;
  where: Maybe<PRISMIC_WhereHome>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type PRISMIC_allCommonsArgs = {
  sortBy: Maybe<PRISMIC_SortCommony>;
  id: Maybe<Scalars['String']>;
  id_in: Maybe<ReadonlyArray<Scalars['String']>>;
  uid: Maybe<Scalars['String']>;
  uid_in: Maybe<ReadonlyArray<Scalars['String']>>;
  lang: Maybe<Scalars['String']>;
  tags: Maybe<ReadonlyArray<Scalars['String']>>;
  tags_in: Maybe<ReadonlyArray<Scalars['String']>>;
  type: Maybe<Scalars['String']>;
  type_in: Maybe<ReadonlyArray<Scalars['String']>>;
  firstPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  fulltext: Maybe<Scalars['String']>;
  similar: Maybe<PRISMIC_similar>;
  where: Maybe<PRISMIC_WhereCommon>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type PRISMIC_categoryArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};


type PRISMIC_allCategorysArgs = {
  sortBy: Maybe<PRISMIC_SortCategoryy>;
  id: Maybe<Scalars['String']>;
  id_in: Maybe<ReadonlyArray<Scalars['String']>>;
  uid: Maybe<Scalars['String']>;
  uid_in: Maybe<ReadonlyArray<Scalars['String']>>;
  lang: Maybe<Scalars['String']>;
  tags: Maybe<ReadonlyArray<Scalars['String']>>;
  tags_in: Maybe<ReadonlyArray<Scalars['String']>>;
  type: Maybe<Scalars['String']>;
  type_in: Maybe<ReadonlyArray<Scalars['String']>>;
  firstPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  fulltext: Maybe<Scalars['String']>;
  similar: Maybe<PRISMIC_similar>;
  where: Maybe<PRISMIC_WhereCategory>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type PRISMIC_allHomemodernsArgs = {
  sortBy: Maybe<PRISMIC_SortHomemoderny>;
  id: Maybe<Scalars['String']>;
  id_in: Maybe<ReadonlyArray<Scalars['String']>>;
  uid: Maybe<Scalars['String']>;
  uid_in: Maybe<ReadonlyArray<Scalars['String']>>;
  lang: Maybe<Scalars['String']>;
  tags: Maybe<ReadonlyArray<Scalars['String']>>;
  tags_in: Maybe<ReadonlyArray<Scalars['String']>>;
  type: Maybe<Scalars['String']>;
  type_in: Maybe<ReadonlyArray<Scalars['String']>>;
  firstPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  firstPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_after: Maybe<Scalars['PRISMIC_DateTime']>;
  lastPublicationDate_before: Maybe<Scalars['PRISMIC_DateTime']>;
  fulltext: Maybe<Scalars['String']>;
  similar: Maybe<PRISMIC_similar>;
  where: Maybe<PRISMIC_WhereHomemodern>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** A prismic document */
type PRISMIC__Document = {
  readonly _meta: PRISMIC_Meta;
};

/** A connection to a list of items. */
type PRISMIC__DocumentConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PRISMIC_PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PRISMIC__DocumentEdge>>>;
  readonly totalCount: Scalars['PRISMIC_Long'];
};

/** An edge in a connection. */
type PRISMIC__DocumentEdge = {
  /** The item at the end of the edge. */
  readonly node: PRISMIC__Document;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** An external link */
type PRISMIC__ExternalLink = PRISMIC__Linkable & {
  readonly url: Scalars['String'];
  readonly target: Maybe<Scalars['String']>;
  readonly _linkType: Maybe<Scalars['String']>;
};

/** A linked file */
type PRISMIC__FileLink = PRISMIC__Linkable & {
  readonly name: Scalars['String'];
  readonly url: Scalars['String'];
  readonly size: Scalars['PRISMIC_Long'];
  readonly _linkType: Maybe<Scalars['String']>;
};

/** A linked image */
type PRISMIC__ImageLink = PRISMIC__Linkable & {
  readonly name: Scalars['String'];
  readonly url: Scalars['String'];
  readonly size: Scalars['PRISMIC_Long'];
  readonly height: Scalars['Int'];
  readonly width: Scalars['Int'];
  readonly _linkType: Maybe<Scalars['String']>;
};

/** A prismic link */
type PRISMIC__Linkable = {
  readonly _linkType: Maybe<Scalars['String']>;
};

type PRISMIC_Category = PRISMIC__Document & PRISMIC__Linkable & {
  readonly title: Maybe<Scalars['PRISMIC_Json']>;
  readonly parent_category: Maybe<PRISMIC__Linkable>;
  readonly featured: Maybe<Scalars['PRISMIC_Json']>;
  readonly image: Maybe<Scalars['PRISMIC_Json']>;
  readonly description: Maybe<Scalars['PRISMIC_Json']>;
  readonly link: Maybe<PRISMIC__Linkable>;
  readonly _meta: PRISMIC_Meta;
  readonly _linkType: Maybe<Scalars['String']>;
  readonly imageSharp: Maybe<File>;
};


type PRISMIC_Category_imageSharpArgs = {
  crop: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
type PRISMIC_CategoryConnectionConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PRISMIC_PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PRISMIC_CategoryConnectionEdge>>>;
  readonly totalCount: Scalars['PRISMIC_Long'];
};

/** An edge in a connection. */
type PRISMIC_CategoryConnectionEdge = {
  /** The item at the end of the edge. */
  readonly node: PRISMIC_Category;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

type PRISMIC_Common = PRISMIC__Document & PRISMIC__Linkable & {
  readonly header_notice_switch: Maybe<Scalars['PRISMIC_Json']>;
  readonly special_notice_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly top_header_color: Maybe<Scalars['String']>;
  readonly logo: Maybe<Scalars['PRISMIC_Json']>;
  readonly search_placeholder: Maybe<Scalars['PRISMIC_Json']>;
  readonly shopping_cart_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly total_amount_text: Maybe<Scalars['PRISMIC_Json']>;
  readonly checkout_button_text: Maybe<Scalars['PRISMIC_Json']>;
  readonly copyright_text: Maybe<Scalars['PRISMIC_Json']>;
  readonly social_links: Maybe<ReadonlyArray<PRISMIC_CommonSocial_links>>;
  readonly ad_blocks: Maybe<ReadonlyArray<PRISMIC_CommonAd_blocks>>;
  readonly _meta: PRISMIC_Meta;
  readonly _linkType: Maybe<Scalars['String']>;
};

type PRISMIC_CommonAd_blocks = {
  readonly block_image: Maybe<Scalars['PRISMIC_Json']>;
  readonly badge_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly badge_color: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['PRISMIC_Json']>;
  readonly short_description: Maybe<Scalars['PRISMIC_Json']>;
  readonly add_a_button: Maybe<Scalars['PRISMIC_Json']>;
  readonly button_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly block_imageSharp: Maybe<File>;
};


type PRISMIC_CommonAd_blocks_block_imageSharpArgs = {
  crop: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
type PRISMIC_CommonConnectionConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PRISMIC_PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PRISMIC_CommonConnectionEdge>>>;
  readonly totalCount: Scalars['PRISMIC_Long'];
};

/** An edge in a connection. */
type PRISMIC_CommonConnectionEdge = {
  /** The item at the end of the edge. */
  readonly node: PRISMIC_Common;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

type PRISMIC_CommonSocial_links = {
  readonly social_type: Maybe<Scalars['String']>;
  readonly social_link: Maybe<PRISMIC__Linkable>;
};


type PRISMIC_Home = PRISMIC__Document & PRISMIC__Linkable & {
  readonly banner: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_slider: Maybe<ReadonlyArray<PRISMIC_HomeBanner_slider>>;
  readonly banner_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_subtitle: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_button_text: Maybe<Scalars['PRISMIC_Json']>;
  readonly trending_block_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly view_more_text: Maybe<Scalars['PRISMIC_Json']>;
  readonly how_it_works_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly how_it_works_subtitle: Maybe<Scalars['PRISMIC_Json']>;
  readonly how_it_works_group: Maybe<ReadonlyArray<PRISMIC_HomeHow_it_works_group>>;
  readonly call_us_banner: Maybe<Scalars['PRISMIC_Json']>;
  readonly call_us_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly call_us_button_text: Maybe<Scalars['PRISMIC_Json']>;
  readonly category_section_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly category_section_short_intro: Maybe<Scalars['PRISMIC_Json']>;
  readonly category_block: Maybe<ReadonlyArray<PRISMIC_HomeCategory_block>>;
  readonly _meta: PRISMIC_Meta;
  readonly _linkType: Maybe<Scalars['String']>;
};

type PRISMIC_HomeBanner_slider = {
  readonly image: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_title1: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_subtitle1: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_description: Maybe<Scalars['PRISMIC_Json']>;
  readonly imageSharp: Maybe<File>;
};


type PRISMIC_HomeBanner_slider_imageSharpArgs = {
  crop: Maybe<Scalars['String']>;
};

type PRISMIC_HomeCategory_block = {
  readonly image: Maybe<Scalars['PRISMIC_Json']>;
  readonly category_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly category_slug: Maybe<Scalars['String']>;
  readonly imageSharp: Maybe<File>;
};


type PRISMIC_HomeCategory_block_imageSharpArgs = {
  crop: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
type PRISMIC_HomeConnectionConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PRISMIC_PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PRISMIC_HomeConnectionEdge>>>;
  readonly totalCount: Scalars['PRISMIC_Long'];
};

/** An edge in a connection. */
type PRISMIC_HomeConnectionEdge = {
  /** The item at the end of the edge. */
  readonly node: PRISMIC_Home;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

type PRISMIC_HomeHow_it_works_group = {
  readonly image: Maybe<Scalars['PRISMIC_Json']>;
  readonly title: Maybe<Scalars['PRISMIC_Json']>;
  readonly description: Maybe<Scalars['PRISMIC_Json']>;
  readonly imageSharp: Maybe<File>;
};


type PRISMIC_HomeHow_it_works_group_imageSharpArgs = {
  crop: Maybe<Scalars['String']>;
};

type PRISMIC_Homeminimal = PRISMIC__Document & PRISMIC__Linkable & {
  readonly banner_image: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_subtitle: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_button_text: Maybe<Scalars['PRISMIC_Json']>;
  readonly call_us_banner: Maybe<Scalars['PRISMIC_Json']>;
  readonly call_us_banner_content: Maybe<Scalars['PRISMIC_Json']>;
  readonly call_us_button_text: Maybe<Scalars['PRISMIC_Json']>;
  readonly how_it_works: Maybe<ReadonlyArray<PRISMIC_HomeminimalHow_it_works>>;
  readonly _meta: PRISMIC_Meta;
  readonly _linkType: Maybe<Scalars['String']>;
  readonly banner_imageSharp: Maybe<File>;
};


type PRISMIC_Homeminimal_banner_imageSharpArgs = {
  crop: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
type PRISMIC_HomeminimalConnectionConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PRISMIC_PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PRISMIC_HomeminimalConnectionEdge>>>;
  readonly totalCount: Scalars['PRISMIC_Long'];
};

/** An edge in a connection. */
type PRISMIC_HomeminimalConnectionEdge = {
  /** The item at the end of the edge. */
  readonly node: PRISMIC_Homeminimal;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

type PRISMIC_HomeminimalHow_it_works = {
  readonly thumbnail: Maybe<Scalars['PRISMIC_Json']>;
  readonly title: Maybe<Scalars['PRISMIC_Json']>;
  readonly short_description: Maybe<Scalars['PRISMIC_Json']>;
};

type PRISMIC_Homemodern = PRISMIC__Document & PRISMIC__Linkable & {
  readonly banner_image: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_title: Maybe<Scalars['PRISMIC_Json']>;
  readonly banner_subtitle: Maybe<Scalars['PRISMIC_Json']>;
  readonly _meta: PRISMIC_Meta;
  readonly _linkType: Maybe<Scalars['String']>;
  readonly banner_imageSharp: Maybe<File>;
};


type PRISMIC_Homemodern_banner_imageSharpArgs = {
  crop: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
type PRISMIC_HomemodernConnectionConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PRISMIC_PageInfo;
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<PRISMIC_HomemodernConnectionEdge>>>;
  readonly totalCount: Scalars['PRISMIC_Long'];
};

/** An edge in a connection. */
type PRISMIC_HomemodernConnectionEdge = {
  /** The item at the end of the edge. */
  readonly node: PRISMIC_Homemodern;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};



type PRISMIC_Meta = {
  /** The id of the document. */
  readonly id: Scalars['String'];
  /** The uid of the document. */
  readonly uid: Maybe<Scalars['String']>;
  /** The type of the document. */
  readonly type: Scalars['String'];
  /** The tags of the document. */
  readonly tags: ReadonlyArray<Scalars['String']>;
  /** The language of the document. */
  readonly lang: Scalars['String'];
  /** Alternate languages the document. */
  readonly alternateLanguages: ReadonlyArray<PRISMIC_RelatedDocument>;
  /** The first publication date of the document. */
  readonly firstPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
  /** The last publication date of the document. */
  readonly lastPublicationDate: Maybe<Scalars['PRISMIC_DateTime']>;
};

/** Information about pagination in a connection. */
type PRISMIC_PageInfo = {
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
};

type PRISMIC_RelatedDocument = {
  /** The id of the document. */
  readonly id: Scalars['String'];
  /** The uid of the document. */
  readonly uid: Maybe<Scalars['String']>;
  /** The type of the document. */
  readonly type: Scalars['String'];
  /** The language of the document. */
  readonly lang: Scalars['String'];
};

type PRISMIC_similar = {
  readonly documentId: Scalars['String'];
  readonly max: Scalars['Int'];
};

enum PRISMIC_SortCategoryy {
  meta_firstPublicationDate_ASC = 'meta_firstPublicationDate_ASC',
  meta_firstPublicationDate_DESC = 'meta_firstPublicationDate_DESC',
  meta_lastPublicationDate_ASC = 'meta_lastPublicationDate_ASC',
  meta_lastPublicationDate_DESC = 'meta_lastPublicationDate_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC'
}

enum PRISMIC_SortCommony {
  meta_firstPublicationDate_ASC = 'meta_firstPublicationDate_ASC',
  meta_firstPublicationDate_DESC = 'meta_firstPublicationDate_DESC',
  meta_lastPublicationDate_ASC = 'meta_lastPublicationDate_ASC',
  meta_lastPublicationDate_DESC = 'meta_lastPublicationDate_DESC',
  special_notice_title_ASC = 'special_notice_title_ASC',
  special_notice_title_DESC = 'special_notice_title_DESC',
  search_placeholder_ASC = 'search_placeholder_ASC',
  search_placeholder_DESC = 'search_placeholder_DESC',
  shopping_cart_title_ASC = 'shopping_cart_title_ASC',
  shopping_cart_title_DESC = 'shopping_cart_title_DESC',
  total_amount_text_ASC = 'total_amount_text_ASC',
  total_amount_text_DESC = 'total_amount_text_DESC',
  checkout_button_text_ASC = 'checkout_button_text_ASC',
  checkout_button_text_DESC = 'checkout_button_text_DESC',
  copyright_text_ASC = 'copyright_text_ASC',
  copyright_text_DESC = 'copyright_text_DESC'
}

enum PRISMIC_SortDocumentsBy {
  meta_firstPublicationDate_ASC = 'meta_firstPublicationDate_ASC',
  meta_firstPublicationDate_DESC = 'meta_firstPublicationDate_DESC',
  meta_lastPublicationDate_ASC = 'meta_lastPublicationDate_ASC',
  meta_lastPublicationDate_DESC = 'meta_lastPublicationDate_DESC'
}

enum PRISMIC_SortHomeminimaly {
  meta_firstPublicationDate_ASC = 'meta_firstPublicationDate_ASC',
  meta_firstPublicationDate_DESC = 'meta_firstPublicationDate_DESC',
  meta_lastPublicationDate_ASC = 'meta_lastPublicationDate_ASC',
  meta_lastPublicationDate_DESC = 'meta_lastPublicationDate_DESC',
  banner_title_ASC = 'banner_title_ASC',
  banner_title_DESC = 'banner_title_DESC',
  banner_subtitle_ASC = 'banner_subtitle_ASC',
  banner_subtitle_DESC = 'banner_subtitle_DESC',
  banner_button_text_ASC = 'banner_button_text_ASC',
  banner_button_text_DESC = 'banner_button_text_DESC',
  call_us_banner_content_ASC = 'call_us_banner_content_ASC',
  call_us_banner_content_DESC = 'call_us_banner_content_DESC',
  call_us_button_text_ASC = 'call_us_button_text_ASC',
  call_us_button_text_DESC = 'call_us_button_text_DESC'
}

enum PRISMIC_SortHomemoderny {
  meta_firstPublicationDate_ASC = 'meta_firstPublicationDate_ASC',
  meta_firstPublicationDate_DESC = 'meta_firstPublicationDate_DESC',
  meta_lastPublicationDate_ASC = 'meta_lastPublicationDate_ASC',
  meta_lastPublicationDate_DESC = 'meta_lastPublicationDate_DESC',
  banner_title_ASC = 'banner_title_ASC',
  banner_title_DESC = 'banner_title_DESC',
  banner_subtitle_ASC = 'banner_subtitle_ASC',
  banner_subtitle_DESC = 'banner_subtitle_DESC'
}

enum PRISMIC_SortHomey {
  meta_firstPublicationDate_ASC = 'meta_firstPublicationDate_ASC',
  meta_firstPublicationDate_DESC = 'meta_firstPublicationDate_DESC',
  meta_lastPublicationDate_ASC = 'meta_lastPublicationDate_ASC',
  meta_lastPublicationDate_DESC = 'meta_lastPublicationDate_DESC',
  banner_title_ASC = 'banner_title_ASC',
  banner_title_DESC = 'banner_title_DESC',
  banner_subtitle_ASC = 'banner_subtitle_ASC',
  banner_subtitle_DESC = 'banner_subtitle_DESC',
  banner_button_text_ASC = 'banner_button_text_ASC',
  banner_button_text_DESC = 'banner_button_text_DESC',
  trending_block_title_ASC = 'trending_block_title_ASC',
  trending_block_title_DESC = 'trending_block_title_DESC',
  view_more_text_ASC = 'view_more_text_ASC',
  view_more_text_DESC = 'view_more_text_DESC',
  how_it_works_title_ASC = 'how_it_works_title_ASC',
  how_it_works_title_DESC = 'how_it_works_title_DESC',
  how_it_works_subtitle_ASC = 'how_it_works_subtitle_ASC',
  how_it_works_subtitle_DESC = 'how_it_works_subtitle_DESC',
  call_us_title_ASC = 'call_us_title_ASC',
  call_us_title_DESC = 'call_us_title_DESC',
  call_us_button_text_ASC = 'call_us_button_text_ASC',
  call_us_button_text_DESC = 'call_us_button_text_DESC',
  category_section_title_ASC = 'category_section_title_ASC',
  category_section_title_DESC = 'category_section_title_DESC',
  category_section_short_intro_ASC = 'category_section_short_intro_ASC',
  category_section_short_intro_DESC = 'category_section_short_intro_DESC'
}

type PRISMIC_WhereCategory = {
  /** title */
  readonly title_fulltext: Maybe<Scalars['String']>;
  /** parent_category */
  readonly parent_category: Maybe<Scalars['String']>;
  readonly featured: Maybe<Scalars['Boolean']>;
  /** description */
  readonly description_fulltext: Maybe<Scalars['String']>;
  /** link */
  readonly link: Maybe<Scalars['String']>;
};

type PRISMIC_WhereCommon = {
  readonly header_notice_switch: Maybe<Scalars['Boolean']>;
  /** special_notice_title */
  readonly special_notice_title_fulltext: Maybe<Scalars['String']>;
  /** search_placeholder */
  readonly search_placeholder_fulltext: Maybe<Scalars['String']>;
  /** shopping_cart_title */
  readonly shopping_cart_title_fulltext: Maybe<Scalars['String']>;
  /** total_amount_text */
  readonly total_amount_text_fulltext: Maybe<Scalars['String']>;
  /** checkout_button_text */
  readonly checkout_button_text_fulltext: Maybe<Scalars['String']>;
  /** copyright_text */
  readonly copyright_text_fulltext: Maybe<Scalars['String']>;
};

type PRISMIC_WhereHome = {
  /** banner_title */
  readonly banner_title_fulltext: Maybe<Scalars['String']>;
  /** banner_subtitle */
  readonly banner_subtitle_fulltext: Maybe<Scalars['String']>;
  /** banner_button_text */
  readonly banner_button_text_fulltext: Maybe<Scalars['String']>;
  /** trending_block_title */
  readonly trending_block_title_fulltext: Maybe<Scalars['String']>;
  /** view_more_text */
  readonly view_more_text_fulltext: Maybe<Scalars['String']>;
  /** how_it_works_title */
  readonly how_it_works_title_fulltext: Maybe<Scalars['String']>;
  /** how_it_works_subtitle */
  readonly how_it_works_subtitle_fulltext: Maybe<Scalars['String']>;
  /** call_us_title */
  readonly call_us_title_fulltext: Maybe<Scalars['String']>;
  /** call_us_button_text */
  readonly call_us_button_text_fulltext: Maybe<Scalars['String']>;
  /** category_section_title */
  readonly category_section_title_fulltext: Maybe<Scalars['String']>;
  /** category_section_short_intro */
  readonly category_section_short_intro_fulltext: Maybe<Scalars['String']>;
};

type PRISMIC_WhereHomeminimal = {
  /** banner_title */
  readonly banner_title_fulltext: Maybe<Scalars['String']>;
  /** banner_subtitle */
  readonly banner_subtitle_fulltext: Maybe<Scalars['String']>;
  /** banner_button_text */
  readonly banner_button_text_fulltext: Maybe<Scalars['String']>;
  /** call_us_banner_content */
  readonly call_us_banner_content_fulltext: Maybe<Scalars['String']>;
  /** call_us_button_text */
  readonly call_us_button_text_fulltext: Maybe<Scalars['String']>;
};

type PRISMIC_WhereHomemodern = {
  /** banner_title */
  readonly banner_title_fulltext: Maybe<Scalars['String']>;
  /** banner_subtitle */
  readonly banner_subtitle_fulltext: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly graphQlSourcePrismic: Maybe<GraphQLSourcePRISMIC>;
  readonly allGraphQlSourcePrismic: GraphQLSourcePRISMICConnection;
  readonly shopifyProductOption: Maybe<ShopifyProductOption>;
  readonly allShopifyProductOption: ShopifyProductOptionConnection;
  readonly shopifyProductVariant: Maybe<ShopifyProductVariant>;
  readonly allShopifyProductVariant: ShopifyProductVariantConnection;
  readonly shopifyProduct: Maybe<ShopifyProduct>;
  readonly allShopifyProduct: ShopifyProductConnection;
  readonly shopifyCollection: Maybe<ShopifyCollection>;
  readonly allShopifyCollection: ShopifyCollectionConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly prismic: PRISMIC;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphQlSourcePrismicArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
};


type Query_allGraphQlSourcePrismicArgs = {
  filter: Maybe<GraphQLSourcePRISMICFilterInput>;
  sort: Maybe<GraphQLSourcePRISMICSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_shopifyProductOptionArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  values: Maybe<StringQueryOperatorInput>;
  shopifyId: Maybe<StringQueryOperatorInput>;
};


type Query_allShopifyProductOptionArgs = {
  filter: Maybe<ShopifyProductOptionFilterInput>;
  sort: Maybe<ShopifyProductOptionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_shopifyProductVariantArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  availableForSale: Maybe<BooleanQueryOperatorInput>;
  image: Maybe<ShopifyProductVariantImageFilterInput>;
  price: Maybe<StringQueryOperatorInput>;
  priceV2: Maybe<ShopifyProductVariantPriceV2FilterInput>;
  requiresShipping: Maybe<BooleanQueryOperatorInput>;
  selectedOptions: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sku: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  weight: Maybe<IntQueryOperatorInput>;
  weightUnit: Maybe<StringQueryOperatorInput>;
  presentmentPrices: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>;
  shopifyId: Maybe<StringQueryOperatorInput>;
};


type Query_allShopifyProductVariantArgs = {
  filter: Maybe<ShopifyProductVariantFilterInput>;
  sort: Maybe<ShopifyProductVariantSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_shopifyProductArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  availableForSale: Maybe<BooleanQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  descriptionHtml: Maybe<StringQueryOperatorInput>;
  handle: Maybe<StringQueryOperatorInput>;
  images: Maybe<ShopifyProductImagesFilterListInput>;
  priceRange: Maybe<ShopifyProductPriceRangeFilterInput>;
  productType: Maybe<StringQueryOperatorInput>;
  publishedAt: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  vendor: Maybe<StringQueryOperatorInput>;
  shopifyId: Maybe<StringQueryOperatorInput>;
  variants: Maybe<ShopifyProductVariantFilterListInput>;
  options: Maybe<ShopifyProductOptionFilterListInput>;
};


type Query_allShopifyProductArgs = {
  filter: Maybe<ShopifyProductFilterInput>;
  sort: Maybe<ShopifyProductSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_shopifyCollectionArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  descriptionHtml: Maybe<StringQueryOperatorInput>;
  handle: Maybe<StringQueryOperatorInput>;
  image: Maybe<ShopifyCollectionImageFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  shopifyId: Maybe<StringQueryOperatorInput>;
  products: Maybe<ShopifyProductFilterListInput>;
};


type Query_allShopifyCollectionArgs = {
  filter: Maybe<ShopifyCollectionFilterInput>;
  sort: Maybe<ShopifyCollectionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type ShopifyCollection = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly descriptionHtml: Maybe<Scalars['String']>;
  readonly handle: Maybe<Scalars['String']>;
  readonly image: Maybe<ShopifyCollectionImage>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly shopifyId: Maybe<Scalars['String']>;
  readonly products: Maybe<ReadonlyArray<Maybe<ShopifyProduct>>>;
};


type ShopifyCollection_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ShopifyCollectionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ShopifyCollectionEdge>;
  readonly nodes: ReadonlyArray<ShopifyCollection>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ShopifyCollectionGroupConnection>;
};


type ShopifyCollectionConnection_distinctArgs = {
  field: ShopifyCollectionFieldsEnum;
};


type ShopifyCollectionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ShopifyCollectionFieldsEnum;
};

type ShopifyCollectionEdge = {
  readonly next: Maybe<ShopifyCollection>;
  readonly node: ShopifyCollection;
  readonly previous: Maybe<ShopifyCollection>;
};

enum ShopifyCollectionFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  description = 'description',
  descriptionHtml = 'descriptionHtml',
  handle = 'handle',
  image___id = 'image.id',
  image___src = 'image.src',
  image___localFile___sourceInstanceName = 'image.localFile.sourceInstanceName',
  image___localFile___absolutePath = 'image.localFile.absolutePath',
  image___localFile___relativePath = 'image.localFile.relativePath',
  image___localFile___extension = 'image.localFile.extension',
  image___localFile___size = 'image.localFile.size',
  image___localFile___prettySize = 'image.localFile.prettySize',
  image___localFile___modifiedTime = 'image.localFile.modifiedTime',
  image___localFile___accessTime = 'image.localFile.accessTime',
  image___localFile___changeTime = 'image.localFile.changeTime',
  image___localFile___birthTime = 'image.localFile.birthTime',
  image___localFile___root = 'image.localFile.root',
  image___localFile___dir = 'image.localFile.dir',
  image___localFile___base = 'image.localFile.base',
  image___localFile___ext = 'image.localFile.ext',
  image___localFile___name = 'image.localFile.name',
  image___localFile___relativeDirectory = 'image.localFile.relativeDirectory',
  image___localFile___dev = 'image.localFile.dev',
  image___localFile___mode = 'image.localFile.mode',
  image___localFile___nlink = 'image.localFile.nlink',
  image___localFile___uid = 'image.localFile.uid',
  image___localFile___gid = 'image.localFile.gid',
  image___localFile___rdev = 'image.localFile.rdev',
  image___localFile___ino = 'image.localFile.ino',
  image___localFile___atimeMs = 'image.localFile.atimeMs',
  image___localFile___mtimeMs = 'image.localFile.mtimeMs',
  image___localFile___ctimeMs = 'image.localFile.ctimeMs',
  image___localFile___atime = 'image.localFile.atime',
  image___localFile___mtime = 'image.localFile.mtime',
  image___localFile___ctime = 'image.localFile.ctime',
  image___localFile___birthtime = 'image.localFile.birthtime',
  image___localFile___birthtimeMs = 'image.localFile.birthtimeMs',
  image___localFile___blksize = 'image.localFile.blksize',
  image___localFile___blocks = 'image.localFile.blocks',
  image___localFile___url = 'image.localFile.url',
  image___localFile___publicURL = 'image.localFile.publicURL',
  image___localFile___childImageSharp___id = 'image.localFile.childImageSharp.id',
  image___localFile___childImageSharp___children = 'image.localFile.childImageSharp.children',
  image___localFile___id = 'image.localFile.id',
  image___localFile___parent___id = 'image.localFile.parent.id',
  image___localFile___parent___children = 'image.localFile.parent.children',
  image___localFile___children = 'image.localFile.children',
  image___localFile___children___id = 'image.localFile.children.id',
  image___localFile___children___children = 'image.localFile.children.children',
  image___localFile___internal___content = 'image.localFile.internal.content',
  image___localFile___internal___contentDigest = 'image.localFile.internal.contentDigest',
  image___localFile___internal___description = 'image.localFile.internal.description',
  image___localFile___internal___fieldOwners = 'image.localFile.internal.fieldOwners',
  image___localFile___internal___ignoreType = 'image.localFile.internal.ignoreType',
  image___localFile___internal___mediaType = 'image.localFile.internal.mediaType',
  image___localFile___internal___owner = 'image.localFile.internal.owner',
  image___localFile___internal___type = 'image.localFile.internal.type',
  title = 'title',
  updatedAt = 'updatedAt',
  shopifyId = 'shopifyId',
  products = 'products',
  products___id = 'products.id',
  products___parent___id = 'products.parent.id',
  products___parent___parent___id = 'products.parent.parent.id',
  products___parent___parent___children = 'products.parent.parent.children',
  products___parent___children = 'products.parent.children',
  products___parent___children___id = 'products.parent.children.id',
  products___parent___children___children = 'products.parent.children.children',
  products___parent___internal___content = 'products.parent.internal.content',
  products___parent___internal___contentDigest = 'products.parent.internal.contentDigest',
  products___parent___internal___description = 'products.parent.internal.description',
  products___parent___internal___fieldOwners = 'products.parent.internal.fieldOwners',
  products___parent___internal___ignoreType = 'products.parent.internal.ignoreType',
  products___parent___internal___mediaType = 'products.parent.internal.mediaType',
  products___parent___internal___owner = 'products.parent.internal.owner',
  products___parent___internal___type = 'products.parent.internal.type',
  products___children = 'products.children',
  products___children___id = 'products.children.id',
  products___children___parent___id = 'products.children.parent.id',
  products___children___parent___children = 'products.children.parent.children',
  products___children___children = 'products.children.children',
  products___children___children___id = 'products.children.children.id',
  products___children___children___children = 'products.children.children.children',
  products___children___internal___content = 'products.children.internal.content',
  products___children___internal___contentDigest = 'products.children.internal.contentDigest',
  products___children___internal___description = 'products.children.internal.description',
  products___children___internal___fieldOwners = 'products.children.internal.fieldOwners',
  products___children___internal___ignoreType = 'products.children.internal.ignoreType',
  products___children___internal___mediaType = 'products.children.internal.mediaType',
  products___children___internal___owner = 'products.children.internal.owner',
  products___children___internal___type = 'products.children.internal.type',
  products___internal___content = 'products.internal.content',
  products___internal___contentDigest = 'products.internal.contentDigest',
  products___internal___description = 'products.internal.description',
  products___internal___fieldOwners = 'products.internal.fieldOwners',
  products___internal___ignoreType = 'products.internal.ignoreType',
  products___internal___mediaType = 'products.internal.mediaType',
  products___internal___owner = 'products.internal.owner',
  products___internal___type = 'products.internal.type',
  products___availableForSale = 'products.availableForSale',
  products___createdAt = 'products.createdAt',
  products___description = 'products.description',
  products___descriptionHtml = 'products.descriptionHtml',
  products___handle = 'products.handle',
  products___images = 'products.images',
  products___images___id = 'products.images.id',
  products___images___originalSrc = 'products.images.originalSrc',
  products___images___localFile___sourceInstanceName = 'products.images.localFile.sourceInstanceName',
  products___images___localFile___absolutePath = 'products.images.localFile.absolutePath',
  products___images___localFile___relativePath = 'products.images.localFile.relativePath',
  products___images___localFile___extension = 'products.images.localFile.extension',
  products___images___localFile___size = 'products.images.localFile.size',
  products___images___localFile___prettySize = 'products.images.localFile.prettySize',
  products___images___localFile___modifiedTime = 'products.images.localFile.modifiedTime',
  products___images___localFile___accessTime = 'products.images.localFile.accessTime',
  products___images___localFile___changeTime = 'products.images.localFile.changeTime',
  products___images___localFile___birthTime = 'products.images.localFile.birthTime',
  products___images___localFile___root = 'products.images.localFile.root',
  products___images___localFile___dir = 'products.images.localFile.dir',
  products___images___localFile___base = 'products.images.localFile.base',
  products___images___localFile___ext = 'products.images.localFile.ext',
  products___images___localFile___name = 'products.images.localFile.name',
  products___images___localFile___relativeDirectory = 'products.images.localFile.relativeDirectory',
  products___images___localFile___dev = 'products.images.localFile.dev',
  products___images___localFile___mode = 'products.images.localFile.mode',
  products___images___localFile___nlink = 'products.images.localFile.nlink',
  products___images___localFile___uid = 'products.images.localFile.uid',
  products___images___localFile___gid = 'products.images.localFile.gid',
  products___images___localFile___rdev = 'products.images.localFile.rdev',
  products___images___localFile___ino = 'products.images.localFile.ino',
  products___images___localFile___atimeMs = 'products.images.localFile.atimeMs',
  products___images___localFile___mtimeMs = 'products.images.localFile.mtimeMs',
  products___images___localFile___ctimeMs = 'products.images.localFile.ctimeMs',
  products___images___localFile___atime = 'products.images.localFile.atime',
  products___images___localFile___mtime = 'products.images.localFile.mtime',
  products___images___localFile___ctime = 'products.images.localFile.ctime',
  products___images___localFile___birthtime = 'products.images.localFile.birthtime',
  products___images___localFile___birthtimeMs = 'products.images.localFile.birthtimeMs',
  products___images___localFile___blksize = 'products.images.localFile.blksize',
  products___images___localFile___blocks = 'products.images.localFile.blocks',
  products___images___localFile___url = 'products.images.localFile.url',
  products___images___localFile___publicURL = 'products.images.localFile.publicURL',
  products___images___localFile___id = 'products.images.localFile.id',
  products___images___localFile___children = 'products.images.localFile.children',
  products___priceRange___minVariantPrice___amount = 'products.priceRange.minVariantPrice.amount',
  products___priceRange___minVariantPrice___currencyCode = 'products.priceRange.minVariantPrice.currencyCode',
  products___priceRange___maxVariantPrice___amount = 'products.priceRange.maxVariantPrice.amount',
  products___priceRange___maxVariantPrice___currencyCode = 'products.priceRange.maxVariantPrice.currencyCode',
  products___productType = 'products.productType',
  products___publishedAt = 'products.publishedAt',
  products___tags = 'products.tags',
  products___title = 'products.title',
  products___updatedAt = 'products.updatedAt',
  products___vendor = 'products.vendor',
  products___shopifyId = 'products.shopifyId',
  products___variants = 'products.variants',
  products___variants___id = 'products.variants.id',
  products___variants___parent___id = 'products.variants.parent.id',
  products___variants___parent___children = 'products.variants.parent.children',
  products___variants___children = 'products.variants.children',
  products___variants___children___id = 'products.variants.children.id',
  products___variants___children___children = 'products.variants.children.children',
  products___variants___internal___content = 'products.variants.internal.content',
  products___variants___internal___contentDigest = 'products.variants.internal.contentDigest',
  products___variants___internal___description = 'products.variants.internal.description',
  products___variants___internal___fieldOwners = 'products.variants.internal.fieldOwners',
  products___variants___internal___ignoreType = 'products.variants.internal.ignoreType',
  products___variants___internal___mediaType = 'products.variants.internal.mediaType',
  products___variants___internal___owner = 'products.variants.internal.owner',
  products___variants___internal___type = 'products.variants.internal.type',
  products___variants___availableForSale = 'products.variants.availableForSale',
  products___variants___image___id = 'products.variants.image.id',
  products___variants___image___originalSrc = 'products.variants.image.originalSrc',
  products___variants___price = 'products.variants.price',
  products___variants___priceV2___amount = 'products.variants.priceV2.amount',
  products___variants___priceV2___currencyCode = 'products.variants.priceV2.currencyCode',
  products___variants___requiresShipping = 'products.variants.requiresShipping',
  products___variants___selectedOptions = 'products.variants.selectedOptions',
  products___variants___selectedOptions___name = 'products.variants.selectedOptions.name',
  products___variants___selectedOptions___value = 'products.variants.selectedOptions.value',
  products___variants___sku = 'products.variants.sku',
  products___variants___title = 'products.variants.title',
  products___variants___weight = 'products.variants.weight',
  products___variants___weightUnit = 'products.variants.weightUnit',
  products___variants___presentmentPrices___edges = 'products.variants.presentmentPrices.edges',
  products___variants___shopifyId = 'products.variants.shopifyId',
  products___options = 'products.options',
  products___options___id = 'products.options.id',
  products___options___parent___id = 'products.options.parent.id',
  products___options___parent___children = 'products.options.parent.children',
  products___options___children = 'products.options.children',
  products___options___children___id = 'products.options.children.id',
  products___options___children___children = 'products.options.children.children',
  products___options___internal___content = 'products.options.internal.content',
  products___options___internal___contentDigest = 'products.options.internal.contentDigest',
  products___options___internal___description = 'products.options.internal.description',
  products___options___internal___fieldOwners = 'products.options.internal.fieldOwners',
  products___options___internal___ignoreType = 'products.options.internal.ignoreType',
  products___options___internal___mediaType = 'products.options.internal.mediaType',
  products___options___internal___owner = 'products.options.internal.owner',
  products___options___internal___type = 'products.options.internal.type',
  products___options___name = 'products.options.name',
  products___options___values = 'products.options.values',
  products___options___shopifyId = 'products.options.shopifyId'
}

type ShopifyCollectionFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly descriptionHtml: Maybe<StringQueryOperatorInput>;
  readonly handle: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ShopifyCollectionImageFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly shopifyId: Maybe<StringQueryOperatorInput>;
  readonly products: Maybe<ShopifyProductFilterListInput>;
};

type ShopifyCollectionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ShopifyCollectionEdge>;
  readonly nodes: ReadonlyArray<ShopifyCollection>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ShopifyCollectionImage = {
  readonly id: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly localFile: Maybe<File>;
};

type ShopifyCollectionImageFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type ShopifyCollectionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ShopifyCollectionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ShopifyProduct = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly availableForSale: Maybe<Scalars['Boolean']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
  readonly descriptionHtml: Maybe<Scalars['String']>;
  readonly handle: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<Maybe<ShopifyProductImages>>>;
  readonly priceRange: Maybe<ShopifyProductPriceRange>;
  readonly productType: Maybe<Scalars['String']>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly vendor: Maybe<Scalars['String']>;
  readonly shopifyId: Maybe<Scalars['String']>;
  readonly variants: Maybe<ReadonlyArray<Maybe<ShopifyProductVariant>>>;
  readonly options: Maybe<ReadonlyArray<Maybe<ShopifyProductOption>>>;
};


type ShopifyProduct_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ShopifyProduct_publishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ShopifyProduct_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ShopifyProductConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ShopifyProductEdge>;
  readonly nodes: ReadonlyArray<ShopifyProduct>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ShopifyProductGroupConnection>;
};


type ShopifyProductConnection_distinctArgs = {
  field: ShopifyProductFieldsEnum;
};


type ShopifyProductConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ShopifyProductFieldsEnum;
};

type ShopifyProductEdge = {
  readonly next: Maybe<ShopifyProduct>;
  readonly node: ShopifyProduct;
  readonly previous: Maybe<ShopifyProduct>;
};

enum ShopifyProductFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  availableForSale = 'availableForSale',
  createdAt = 'createdAt',
  description = 'description',
  descriptionHtml = 'descriptionHtml',
  handle = 'handle',
  images = 'images',
  images___id = 'images.id',
  images___originalSrc = 'images.originalSrc',
  images___localFile___sourceInstanceName = 'images.localFile.sourceInstanceName',
  images___localFile___absolutePath = 'images.localFile.absolutePath',
  images___localFile___relativePath = 'images.localFile.relativePath',
  images___localFile___extension = 'images.localFile.extension',
  images___localFile___size = 'images.localFile.size',
  images___localFile___prettySize = 'images.localFile.prettySize',
  images___localFile___modifiedTime = 'images.localFile.modifiedTime',
  images___localFile___accessTime = 'images.localFile.accessTime',
  images___localFile___changeTime = 'images.localFile.changeTime',
  images___localFile___birthTime = 'images.localFile.birthTime',
  images___localFile___root = 'images.localFile.root',
  images___localFile___dir = 'images.localFile.dir',
  images___localFile___base = 'images.localFile.base',
  images___localFile___ext = 'images.localFile.ext',
  images___localFile___name = 'images.localFile.name',
  images___localFile___relativeDirectory = 'images.localFile.relativeDirectory',
  images___localFile___dev = 'images.localFile.dev',
  images___localFile___mode = 'images.localFile.mode',
  images___localFile___nlink = 'images.localFile.nlink',
  images___localFile___uid = 'images.localFile.uid',
  images___localFile___gid = 'images.localFile.gid',
  images___localFile___rdev = 'images.localFile.rdev',
  images___localFile___ino = 'images.localFile.ino',
  images___localFile___atimeMs = 'images.localFile.atimeMs',
  images___localFile___mtimeMs = 'images.localFile.mtimeMs',
  images___localFile___ctimeMs = 'images.localFile.ctimeMs',
  images___localFile___atime = 'images.localFile.atime',
  images___localFile___mtime = 'images.localFile.mtime',
  images___localFile___ctime = 'images.localFile.ctime',
  images___localFile___birthtime = 'images.localFile.birthtime',
  images___localFile___birthtimeMs = 'images.localFile.birthtimeMs',
  images___localFile___blksize = 'images.localFile.blksize',
  images___localFile___blocks = 'images.localFile.blocks',
  images___localFile___url = 'images.localFile.url',
  images___localFile___publicURL = 'images.localFile.publicURL',
  images___localFile___childImageSharp___id = 'images.localFile.childImageSharp.id',
  images___localFile___childImageSharp___children = 'images.localFile.childImageSharp.children',
  images___localFile___id = 'images.localFile.id',
  images___localFile___parent___id = 'images.localFile.parent.id',
  images___localFile___parent___children = 'images.localFile.parent.children',
  images___localFile___children = 'images.localFile.children',
  images___localFile___children___id = 'images.localFile.children.id',
  images___localFile___children___children = 'images.localFile.children.children',
  images___localFile___internal___content = 'images.localFile.internal.content',
  images___localFile___internal___contentDigest = 'images.localFile.internal.contentDigest',
  images___localFile___internal___description = 'images.localFile.internal.description',
  images___localFile___internal___fieldOwners = 'images.localFile.internal.fieldOwners',
  images___localFile___internal___ignoreType = 'images.localFile.internal.ignoreType',
  images___localFile___internal___mediaType = 'images.localFile.internal.mediaType',
  images___localFile___internal___owner = 'images.localFile.internal.owner',
  images___localFile___internal___type = 'images.localFile.internal.type',
  priceRange___minVariantPrice___amount = 'priceRange.minVariantPrice.amount',
  priceRange___minVariantPrice___currencyCode = 'priceRange.minVariantPrice.currencyCode',
  priceRange___maxVariantPrice___amount = 'priceRange.maxVariantPrice.amount',
  priceRange___maxVariantPrice___currencyCode = 'priceRange.maxVariantPrice.currencyCode',
  productType = 'productType',
  publishedAt = 'publishedAt',
  tags = 'tags',
  title = 'title',
  updatedAt = 'updatedAt',
  vendor = 'vendor',
  shopifyId = 'shopifyId',
  variants = 'variants',
  variants___id = 'variants.id',
  variants___parent___id = 'variants.parent.id',
  variants___parent___parent___id = 'variants.parent.parent.id',
  variants___parent___parent___children = 'variants.parent.parent.children',
  variants___parent___children = 'variants.parent.children',
  variants___parent___children___id = 'variants.parent.children.id',
  variants___parent___children___children = 'variants.parent.children.children',
  variants___parent___internal___content = 'variants.parent.internal.content',
  variants___parent___internal___contentDigest = 'variants.parent.internal.contentDigest',
  variants___parent___internal___description = 'variants.parent.internal.description',
  variants___parent___internal___fieldOwners = 'variants.parent.internal.fieldOwners',
  variants___parent___internal___ignoreType = 'variants.parent.internal.ignoreType',
  variants___parent___internal___mediaType = 'variants.parent.internal.mediaType',
  variants___parent___internal___owner = 'variants.parent.internal.owner',
  variants___parent___internal___type = 'variants.parent.internal.type',
  variants___children = 'variants.children',
  variants___children___id = 'variants.children.id',
  variants___children___parent___id = 'variants.children.parent.id',
  variants___children___parent___children = 'variants.children.parent.children',
  variants___children___children = 'variants.children.children',
  variants___children___children___id = 'variants.children.children.id',
  variants___children___children___children = 'variants.children.children.children',
  variants___children___internal___content = 'variants.children.internal.content',
  variants___children___internal___contentDigest = 'variants.children.internal.contentDigest',
  variants___children___internal___description = 'variants.children.internal.description',
  variants___children___internal___fieldOwners = 'variants.children.internal.fieldOwners',
  variants___children___internal___ignoreType = 'variants.children.internal.ignoreType',
  variants___children___internal___mediaType = 'variants.children.internal.mediaType',
  variants___children___internal___owner = 'variants.children.internal.owner',
  variants___children___internal___type = 'variants.children.internal.type',
  variants___internal___content = 'variants.internal.content',
  variants___internal___contentDigest = 'variants.internal.contentDigest',
  variants___internal___description = 'variants.internal.description',
  variants___internal___fieldOwners = 'variants.internal.fieldOwners',
  variants___internal___ignoreType = 'variants.internal.ignoreType',
  variants___internal___mediaType = 'variants.internal.mediaType',
  variants___internal___owner = 'variants.internal.owner',
  variants___internal___type = 'variants.internal.type',
  variants___availableForSale = 'variants.availableForSale',
  variants___image___id = 'variants.image.id',
  variants___image___originalSrc = 'variants.image.originalSrc',
  variants___image___localFile___sourceInstanceName = 'variants.image.localFile.sourceInstanceName',
  variants___image___localFile___absolutePath = 'variants.image.localFile.absolutePath',
  variants___image___localFile___relativePath = 'variants.image.localFile.relativePath',
  variants___image___localFile___extension = 'variants.image.localFile.extension',
  variants___image___localFile___size = 'variants.image.localFile.size',
  variants___image___localFile___prettySize = 'variants.image.localFile.prettySize',
  variants___image___localFile___modifiedTime = 'variants.image.localFile.modifiedTime',
  variants___image___localFile___accessTime = 'variants.image.localFile.accessTime',
  variants___image___localFile___changeTime = 'variants.image.localFile.changeTime',
  variants___image___localFile___birthTime = 'variants.image.localFile.birthTime',
  variants___image___localFile___root = 'variants.image.localFile.root',
  variants___image___localFile___dir = 'variants.image.localFile.dir',
  variants___image___localFile___base = 'variants.image.localFile.base',
  variants___image___localFile___ext = 'variants.image.localFile.ext',
  variants___image___localFile___name = 'variants.image.localFile.name',
  variants___image___localFile___relativeDirectory = 'variants.image.localFile.relativeDirectory',
  variants___image___localFile___dev = 'variants.image.localFile.dev',
  variants___image___localFile___mode = 'variants.image.localFile.mode',
  variants___image___localFile___nlink = 'variants.image.localFile.nlink',
  variants___image___localFile___uid = 'variants.image.localFile.uid',
  variants___image___localFile___gid = 'variants.image.localFile.gid',
  variants___image___localFile___rdev = 'variants.image.localFile.rdev',
  variants___image___localFile___ino = 'variants.image.localFile.ino',
  variants___image___localFile___atimeMs = 'variants.image.localFile.atimeMs',
  variants___image___localFile___mtimeMs = 'variants.image.localFile.mtimeMs',
  variants___image___localFile___ctimeMs = 'variants.image.localFile.ctimeMs',
  variants___image___localFile___atime = 'variants.image.localFile.atime',
  variants___image___localFile___mtime = 'variants.image.localFile.mtime',
  variants___image___localFile___ctime = 'variants.image.localFile.ctime',
  variants___image___localFile___birthtime = 'variants.image.localFile.birthtime',
  variants___image___localFile___birthtimeMs = 'variants.image.localFile.birthtimeMs',
  variants___image___localFile___blksize = 'variants.image.localFile.blksize',
  variants___image___localFile___blocks = 'variants.image.localFile.blocks',
  variants___image___localFile___url = 'variants.image.localFile.url',
  variants___image___localFile___publicURL = 'variants.image.localFile.publicURL',
  variants___image___localFile___id = 'variants.image.localFile.id',
  variants___image___localFile___children = 'variants.image.localFile.children',
  variants___price = 'variants.price',
  variants___priceV2___amount = 'variants.priceV2.amount',
  variants___priceV2___currencyCode = 'variants.priceV2.currencyCode',
  variants___requiresShipping = 'variants.requiresShipping',
  variants___selectedOptions = 'variants.selectedOptions',
  variants___selectedOptions___name = 'variants.selectedOptions.name',
  variants___selectedOptions___value = 'variants.selectedOptions.value',
  variants___sku = 'variants.sku',
  variants___title = 'variants.title',
  variants___weight = 'variants.weight',
  variants___weightUnit = 'variants.weightUnit',
  variants___presentmentPrices___edges = 'variants.presentmentPrices.edges',
  variants___shopifyId = 'variants.shopifyId',
  options = 'options',
  options___id = 'options.id',
  options___parent___id = 'options.parent.id',
  options___parent___parent___id = 'options.parent.parent.id',
  options___parent___parent___children = 'options.parent.parent.children',
  options___parent___children = 'options.parent.children',
  options___parent___children___id = 'options.parent.children.id',
  options___parent___children___children = 'options.parent.children.children',
  options___parent___internal___content = 'options.parent.internal.content',
  options___parent___internal___contentDigest = 'options.parent.internal.contentDigest',
  options___parent___internal___description = 'options.parent.internal.description',
  options___parent___internal___fieldOwners = 'options.parent.internal.fieldOwners',
  options___parent___internal___ignoreType = 'options.parent.internal.ignoreType',
  options___parent___internal___mediaType = 'options.parent.internal.mediaType',
  options___parent___internal___owner = 'options.parent.internal.owner',
  options___parent___internal___type = 'options.parent.internal.type',
  options___children = 'options.children',
  options___children___id = 'options.children.id',
  options___children___parent___id = 'options.children.parent.id',
  options___children___parent___children = 'options.children.parent.children',
  options___children___children = 'options.children.children',
  options___children___children___id = 'options.children.children.id',
  options___children___children___children = 'options.children.children.children',
  options___children___internal___content = 'options.children.internal.content',
  options___children___internal___contentDigest = 'options.children.internal.contentDigest',
  options___children___internal___description = 'options.children.internal.description',
  options___children___internal___fieldOwners = 'options.children.internal.fieldOwners',
  options___children___internal___ignoreType = 'options.children.internal.ignoreType',
  options___children___internal___mediaType = 'options.children.internal.mediaType',
  options___children___internal___owner = 'options.children.internal.owner',
  options___children___internal___type = 'options.children.internal.type',
  options___internal___content = 'options.internal.content',
  options___internal___contentDigest = 'options.internal.contentDigest',
  options___internal___description = 'options.internal.description',
  options___internal___fieldOwners = 'options.internal.fieldOwners',
  options___internal___ignoreType = 'options.internal.ignoreType',
  options___internal___mediaType = 'options.internal.mediaType',
  options___internal___owner = 'options.internal.owner',
  options___internal___type = 'options.internal.type',
  options___name = 'options.name',
  options___values = 'options.values',
  options___shopifyId = 'options.shopifyId'
}

type ShopifyProductFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly availableForSale: Maybe<BooleanQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly descriptionHtml: Maybe<StringQueryOperatorInput>;
  readonly handle: Maybe<StringQueryOperatorInput>;
  readonly images: Maybe<ShopifyProductImagesFilterListInput>;
  readonly priceRange: Maybe<ShopifyProductPriceRangeFilterInput>;
  readonly productType: Maybe<StringQueryOperatorInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly vendor: Maybe<StringQueryOperatorInput>;
  readonly shopifyId: Maybe<StringQueryOperatorInput>;
  readonly variants: Maybe<ShopifyProductVariantFilterListInput>;
  readonly options: Maybe<ShopifyProductOptionFilterListInput>;
};

type ShopifyProductFilterListInput = {
  readonly elemMatch: Maybe<ShopifyProductFilterInput>;
};

type ShopifyProductGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ShopifyProductEdge>;
  readonly nodes: ReadonlyArray<ShopifyProduct>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ShopifyProductImages = {
  readonly id: Maybe<Scalars['String']>;
  readonly originalSrc: Maybe<Scalars['String']>;
  readonly localFile: Maybe<File>;
};

type ShopifyProductImagesFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly originalSrc: Maybe<StringQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type ShopifyProductImagesFilterListInput = {
  readonly elemMatch: Maybe<ShopifyProductImagesFilterInput>;
};

type ShopifyProductOption = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly values: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly shopifyId: Maybe<Scalars['String']>;
};

type ShopifyProductOptionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ShopifyProductOptionEdge>;
  readonly nodes: ReadonlyArray<ShopifyProductOption>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ShopifyProductOptionGroupConnection>;
};


type ShopifyProductOptionConnection_distinctArgs = {
  field: ShopifyProductOptionFieldsEnum;
};


type ShopifyProductOptionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ShopifyProductOptionFieldsEnum;
};

type ShopifyProductOptionEdge = {
  readonly next: Maybe<ShopifyProductOption>;
  readonly node: ShopifyProductOption;
  readonly previous: Maybe<ShopifyProductOption>;
};

enum ShopifyProductOptionFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  name = 'name',
  values = 'values',
  shopifyId = 'shopifyId'
}

type ShopifyProductOptionFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly values: Maybe<StringQueryOperatorInput>;
  readonly shopifyId: Maybe<StringQueryOperatorInput>;
};

type ShopifyProductOptionFilterListInput = {
  readonly elemMatch: Maybe<ShopifyProductOptionFilterInput>;
};

type ShopifyProductOptionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ShopifyProductOptionEdge>;
  readonly nodes: ReadonlyArray<ShopifyProductOption>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ShopifyProductOptionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ShopifyProductOptionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ShopifyProductPriceRange = {
  readonly minVariantPrice: Maybe<ShopifyProductPriceRangeMinVariantPrice>;
  readonly maxVariantPrice: Maybe<ShopifyProductPriceRangeMaxVariantPrice>;
};

type ShopifyProductPriceRangeFilterInput = {
  readonly minVariantPrice: Maybe<ShopifyProductPriceRangeMinVariantPriceFilterInput>;
  readonly maxVariantPrice: Maybe<ShopifyProductPriceRangeMaxVariantPriceFilterInput>;
};

type ShopifyProductPriceRangeMaxVariantPrice = {
  readonly amount: Maybe<Scalars['String']>;
  readonly currencyCode: Maybe<Scalars['String']>;
};

type ShopifyProductPriceRangeMaxVariantPriceFilterInput = {
  readonly amount: Maybe<StringQueryOperatorInput>;
  readonly currencyCode: Maybe<StringQueryOperatorInput>;
};

type ShopifyProductPriceRangeMinVariantPrice = {
  readonly amount: Maybe<Scalars['String']>;
  readonly currencyCode: Maybe<Scalars['String']>;
};

type ShopifyProductPriceRangeMinVariantPriceFilterInput = {
  readonly amount: Maybe<StringQueryOperatorInput>;
  readonly currencyCode: Maybe<StringQueryOperatorInput>;
};

type ShopifyProductSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ShopifyProductFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ShopifyProductVariant = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly availableForSale: Maybe<Scalars['Boolean']>;
  readonly image: Maybe<ShopifyProductVariantImage>;
  readonly price: Maybe<Scalars['String']>;
  readonly priceV2: Maybe<ShopifyProductVariantPriceV2>;
  readonly requiresShipping: Maybe<Scalars['Boolean']>;
  readonly selectedOptions: Maybe<ReadonlyArray<Maybe<ShopifyProductVariantSelectedOptions>>>;
  readonly sku: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly weight: Maybe<Scalars['Int']>;
  readonly weightUnit: Maybe<Scalars['String']>;
  readonly presentmentPrices: Maybe<ShopifyProductVariantPresentmentPrices>;
  readonly shopifyId: Maybe<Scalars['String']>;
};

type ShopifyProductVariantConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ShopifyProductVariantEdge>;
  readonly nodes: ReadonlyArray<ShopifyProductVariant>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ShopifyProductVariantGroupConnection>;
};


type ShopifyProductVariantConnection_distinctArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


type ShopifyProductVariantConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldsEnum;
};

type ShopifyProductVariantEdge = {
  readonly next: Maybe<ShopifyProductVariant>;
  readonly node: ShopifyProductVariant;
  readonly previous: Maybe<ShopifyProductVariant>;
};

enum ShopifyProductVariantFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  availableForSale = 'availableForSale',
  image___id = 'image.id',
  image___originalSrc = 'image.originalSrc',
  image___localFile___sourceInstanceName = 'image.localFile.sourceInstanceName',
  image___localFile___absolutePath = 'image.localFile.absolutePath',
  image___localFile___relativePath = 'image.localFile.relativePath',
  image___localFile___extension = 'image.localFile.extension',
  image___localFile___size = 'image.localFile.size',
  image___localFile___prettySize = 'image.localFile.prettySize',
  image___localFile___modifiedTime = 'image.localFile.modifiedTime',
  image___localFile___accessTime = 'image.localFile.accessTime',
  image___localFile___changeTime = 'image.localFile.changeTime',
  image___localFile___birthTime = 'image.localFile.birthTime',
  image___localFile___root = 'image.localFile.root',
  image___localFile___dir = 'image.localFile.dir',
  image___localFile___base = 'image.localFile.base',
  image___localFile___ext = 'image.localFile.ext',
  image___localFile___name = 'image.localFile.name',
  image___localFile___relativeDirectory = 'image.localFile.relativeDirectory',
  image___localFile___dev = 'image.localFile.dev',
  image___localFile___mode = 'image.localFile.mode',
  image___localFile___nlink = 'image.localFile.nlink',
  image___localFile___uid = 'image.localFile.uid',
  image___localFile___gid = 'image.localFile.gid',
  image___localFile___rdev = 'image.localFile.rdev',
  image___localFile___ino = 'image.localFile.ino',
  image___localFile___atimeMs = 'image.localFile.atimeMs',
  image___localFile___mtimeMs = 'image.localFile.mtimeMs',
  image___localFile___ctimeMs = 'image.localFile.ctimeMs',
  image___localFile___atime = 'image.localFile.atime',
  image___localFile___mtime = 'image.localFile.mtime',
  image___localFile___ctime = 'image.localFile.ctime',
  image___localFile___birthtime = 'image.localFile.birthtime',
  image___localFile___birthtimeMs = 'image.localFile.birthtimeMs',
  image___localFile___blksize = 'image.localFile.blksize',
  image___localFile___blocks = 'image.localFile.blocks',
  image___localFile___url = 'image.localFile.url',
  image___localFile___publicURL = 'image.localFile.publicURL',
  image___localFile___childImageSharp___id = 'image.localFile.childImageSharp.id',
  image___localFile___childImageSharp___children = 'image.localFile.childImageSharp.children',
  image___localFile___id = 'image.localFile.id',
  image___localFile___parent___id = 'image.localFile.parent.id',
  image___localFile___parent___children = 'image.localFile.parent.children',
  image___localFile___children = 'image.localFile.children',
  image___localFile___children___id = 'image.localFile.children.id',
  image___localFile___children___children = 'image.localFile.children.children',
  image___localFile___internal___content = 'image.localFile.internal.content',
  image___localFile___internal___contentDigest = 'image.localFile.internal.contentDigest',
  image___localFile___internal___description = 'image.localFile.internal.description',
  image___localFile___internal___fieldOwners = 'image.localFile.internal.fieldOwners',
  image___localFile___internal___ignoreType = 'image.localFile.internal.ignoreType',
  image___localFile___internal___mediaType = 'image.localFile.internal.mediaType',
  image___localFile___internal___owner = 'image.localFile.internal.owner',
  image___localFile___internal___type = 'image.localFile.internal.type',
  price = 'price',
  priceV2___amount = 'priceV2.amount',
  priceV2___currencyCode = 'priceV2.currencyCode',
  requiresShipping = 'requiresShipping',
  selectedOptions = 'selectedOptions',
  selectedOptions___name = 'selectedOptions.name',
  selectedOptions___value = 'selectedOptions.value',
  sku = 'sku',
  title = 'title',
  weight = 'weight',
  weightUnit = 'weightUnit',
  presentmentPrices___edges = 'presentmentPrices.edges',
  shopifyId = 'shopifyId'
}

type ShopifyProductVariantFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly availableForSale: Maybe<BooleanQueryOperatorInput>;
  readonly image: Maybe<ShopifyProductVariantImageFilterInput>;
  readonly price: Maybe<StringQueryOperatorInput>;
  readonly priceV2: Maybe<ShopifyProductVariantPriceV2FilterInput>;
  readonly requiresShipping: Maybe<BooleanQueryOperatorInput>;
  readonly selectedOptions: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  readonly sku: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly weight: Maybe<IntQueryOperatorInput>;
  readonly weightUnit: Maybe<StringQueryOperatorInput>;
  readonly presentmentPrices: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>;
  readonly shopifyId: Maybe<StringQueryOperatorInput>;
};

type ShopifyProductVariantFilterListInput = {
  readonly elemMatch: Maybe<ShopifyProductVariantFilterInput>;
};

type ShopifyProductVariantGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ShopifyProductVariantEdge>;
  readonly nodes: ReadonlyArray<ShopifyProductVariant>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ShopifyProductVariantImage = {
  readonly id: Maybe<Scalars['String']>;
  readonly originalSrc: Maybe<Scalars['String']>;
  readonly localFile: Maybe<File>;
};

type ShopifyProductVariantImageFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly originalSrc: Maybe<StringQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type ShopifyProductVariantPresentmentPrices = {
  readonly edges: Maybe<ReadonlyArray<Maybe<ShopifyProductVariantPresentmentPricesEdges>>>;
};

type ShopifyProductVariantPresentmentPricesEdges = {
  readonly node: Maybe<ShopifyProductVariantPresentmentPricesEdgesNode>;
};

type ShopifyProductVariantPresentmentPricesEdgesFilterInput = {
  readonly node: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput>;
};

type ShopifyProductVariantPresentmentPricesEdgesFilterListInput = {
  readonly elemMatch: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterInput>;
};

type ShopifyProductVariantPresentmentPricesEdgesNode = {
  readonly price: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePrice>;
};

type ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput = {
  readonly price: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput>;
};

type ShopifyProductVariantPresentmentPricesEdgesNodePrice = {
  readonly amount: Maybe<Scalars['String']>;
  readonly currencyCode: Maybe<Scalars['String']>;
};

type ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput = {
  readonly amount: Maybe<StringQueryOperatorInput>;
  readonly currencyCode: Maybe<StringQueryOperatorInput>;
};

type ShopifyProductVariantPresentmentPricesFilterInput = {
  readonly edges: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterListInput>;
};

type ShopifyProductVariantPriceV2 = {
  readonly amount: Maybe<Scalars['String']>;
  readonly currencyCode: Maybe<Scalars['String']>;
};

type ShopifyProductVariantPriceV2FilterInput = {
  readonly amount: Maybe<StringQueryOperatorInput>;
  readonly currencyCode: Maybe<StringQueryOperatorInput>;
};

type ShopifyProductVariantSelectedOptions = {
  readonly name: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

type ShopifyProductVariantSelectedOptionsFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
};

type ShopifyProductVariantSelectedOptionsFilterListInput = {
  readonly elemMatch: Maybe<ShopifyProductVariantSelectedOptionsFilterInput>;
};

type ShopifyProductVariantSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ShopifyProductVariantFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___author = 'siteMetadata.author',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly prismicPreviewPage: Maybe<Scalars['Boolean']>;
  readonly handle: Maybe<Scalars['String']>;
  readonly rootQuery: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly prismicPreviewPage: Maybe<BooleanQueryOperatorInput>;
  readonly handle: Maybe<StringQueryOperatorInput>;
  readonly rootQuery: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___prismicPreviewPage = 'context.prismicPreviewPage',
  context___handle = 'context.handle',
  context___rootQuery = 'context.rootQuery',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___component = 'pluginCreator.pluginOptions.component',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___shopName = 'pluginCreator.pluginOptions.shopName',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator.pluginOptions.accessToken',
  pluginCreator___pluginOptions___verbose = 'pluginCreator.pluginOptions.verbose',
  pluginCreator___pluginOptions___paginationSize = 'pluginCreator.pluginOptions.paginationSize',
  pluginCreator___pluginOptions___includeCollections = 'pluginCreator.pluginOptions.includeCollections',
  pluginCreator___pluginOptions___repositoryName = 'pluginCreator.pluginOptions.repositoryName',
  pluginCreator___pluginOptions___previews = 'pluginCreator.pluginOptions.previews',
  pluginCreator___pluginOptions___fonts = 'pluginCreator.pluginOptions.fonts',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___color = 'pluginCreator.pluginOptions.color',
  pluginCreator___pluginOptions___showSpinner = 'pluginCreator.pluginOptions.showSpinner',
  pluginCreator___pluginOptions___useMozJpeg = 'pluginCreator.pluginOptions.useMozJpeg',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___component = 'pluginOptions.component',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___shopName = 'pluginOptions.shopName',
  pluginOptions___accessToken = 'pluginOptions.accessToken',
  pluginOptions___verbose = 'pluginOptions.verbose',
  pluginOptions___paginationSize = 'pluginOptions.paginationSize',
  pluginOptions___includeCollections = 'pluginOptions.includeCollections',
  pluginOptions___repositoryName = 'pluginOptions.repositoryName',
  pluginOptions___previews = 'pluginOptions.previews',
  pluginOptions___fonts = 'pluginOptions.fonts',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___color = 'pluginOptions.color',
  pluginOptions___showSpinner = 'pluginOptions.showSpinner',
  pluginOptions___useMozJpeg = 'pluginOptions.useMozJpeg',
  pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions.include_favicon',
  pluginOptions___legacy = 'pluginOptions.legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
  pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly component: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly shopName: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly verbose: Maybe<Scalars['Boolean']>;
  readonly paginationSize: Maybe<Scalars['Int']>;
  readonly includeCollections: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly previews: Maybe<Scalars['Boolean']>;
  readonly fonts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly display: Maybe<Scalars['String']>;
  readonly color: Maybe<Scalars['String']>;
  readonly showSpinner: Maybe<Scalars['Boolean']>;
  readonly useMozJpeg: Maybe<Scalars['Boolean']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly shopName: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly verbose: Maybe<BooleanQueryOperatorInput>;
  readonly paginationSize: Maybe<IntQueryOperatorInput>;
  readonly includeCollections: Maybe<StringQueryOperatorInput>;
  readonly repositoryName: Maybe<StringQueryOperatorInput>;
  readonly previews: Maybe<BooleanQueryOperatorInput>;
  readonly fonts: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly showSpinner: Maybe<BooleanQueryOperatorInput>;
  readonly useMozJpeg: Maybe<BooleanQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type Unnamed_1_QueryVariables = {};


type Unnamed_1_Query = { readonly allShopifyProduct: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ShopifyProduct, 'id' | 'title' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
        & { readonly variants: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
          & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
        )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductImages, 'id' | 'originalSrc'>
          & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
        )>>> }
      ) }> } };

type Unnamed_2_QueryVariables = {};


type Unnamed_2_Query = { readonly allShopifyProduct: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ShopifyProduct, 'id' | 'title' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
        & { readonly variants: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
          & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
        )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductImages, 'id' | 'originalSrc'>
          & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
        )>>> }
      ) }> } };

type Unnamed_3_QueryVariables = {};


type Unnamed_3_Query = { readonly prismic: { readonly allCommons: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: (
          Pick<PRISMIC_Common, 'copyright_text'>
          & { readonly social_links: Maybe<ReadonlyArray<(
            Pick<PRISMIC_CommonSocial_links, 'social_type'>
            & { readonly social_link: Maybe<Pick<PRISMIC__ExternalLink, 'url'>> }
          )>> }
        ) }>>> } } };

type Unnamed_4_QueryVariables = {};


type Unnamed_4_Query = { readonly allShopifyProduct: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ShopifyProduct, 'id' | 'title' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
        & { readonly variants: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
          & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
        )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductImages, 'id' | 'originalSrc'>
          & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
        )>>> }
      ) }> } };

type Unnamed_5_QueryVariables = {};


type Unnamed_5_Query = { readonly prismic: { readonly firstData: (
      Pick<PRISMIC_CategoryConnectionConnection, 'totalCount'>
      & { readonly edges: Maybe<ReadonlyArray<Maybe<(
        Pick<PRISMIC_CategoryConnectionEdge, 'cursor'>
        & { readonly node: (
          Pick<PRISMIC_Category, 'title'>
          & { readonly _meta: Pick<PRISMIC_Meta, 'uid'>, readonly parent_category: Maybe<(
            Pick<PRISMIC_Category, 'title'>
            & { readonly _meta: Pick<PRISMIC_Meta, 'uid'> }
          )> }
        ) }
      )>>>, readonly pageInfo: Pick<PRISMIC_PageInfo, 'hasNextPage' | 'endCursor'> }
    ), readonly lastData: (
      Pick<PRISMIC_CategoryConnectionConnection, 'totalCount'>
      & { readonly edges: Maybe<ReadonlyArray<Maybe<(
        Pick<PRISMIC_CategoryConnectionEdge, 'cursor'>
        & { readonly node: (
          Pick<PRISMIC_Category, 'title'>
          & { readonly _meta: Pick<PRISMIC_Meta, 'uid'>, readonly parent_category: Maybe<(
            Pick<PRISMIC_Category, 'title'>
            & { readonly _meta: Pick<PRISMIC_Meta, 'uid'> }
          )> }
        ) }
      )>>>, readonly pageInfo: Pick<PRISMIC_PageInfo, 'hasNextPage' | 'endCursor'> }
    ) } };

type Unnamed_6_QueryVariables = {};


type Unnamed_6_Query = { readonly prismic: { readonly allCommons: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: Pick<PRISMIC_Common, 'logo'> }>>> } } };

type Unnamed_7_QueryVariables = {};


type Unnamed_7_Query = { readonly prismic: { readonly allCommons: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: (
          Pick<PRISMIC_Common, 'copyright_text'>
          & { readonly social_links: Maybe<ReadonlyArray<(
            Pick<PRISMIC_CommonSocial_links, 'social_type'>
            & { readonly social_link: Maybe<Pick<PRISMIC__ExternalLink, 'url'>> }
          )>> }
        ) }>>> } } };

type Unnamed_8_QueryVariables = {};


type Unnamed_8_Query = { readonly prismic: { readonly firstData: (
      Pick<PRISMIC_CategoryConnectionConnection, 'totalCount'>
      & { readonly edges: Maybe<ReadonlyArray<Maybe<(
        Pick<PRISMIC_CategoryConnectionEdge, 'cursor'>
        & { readonly node: (
          Pick<PRISMIC_Category, 'title'>
          & { readonly _meta: Pick<PRISMIC_Meta, 'uid'>, readonly parent_category: Maybe<(
            Pick<PRISMIC_Category, 'title'>
            & { readonly _meta: Pick<PRISMIC_Meta, 'uid'> }
          )> }
        ) }
      )>>>, readonly pageInfo: Pick<PRISMIC_PageInfo, 'hasNextPage' | 'endCursor'> }
    ), readonly lastData: (
      Pick<PRISMIC_CategoryConnectionConnection, 'totalCount'>
      & { readonly edges: Maybe<ReadonlyArray<Maybe<(
        Pick<PRISMIC_CategoryConnectionEdge, 'cursor'>
        & { readonly node: (
          Pick<PRISMIC_Category, 'title'>
          & { readonly _meta: Pick<PRISMIC_Meta, 'uid'>, readonly parent_category: Maybe<(
            Pick<PRISMIC_Category, 'title'>
            & { readonly _meta: Pick<PRISMIC_Meta, 'uid'> }
          )> }
        ) }
      )>>>, readonly pageInfo: Pick<PRISMIC_PageInfo, 'hasNextPage' | 'endCursor'> }
    ) } };

type Unnamed_9_QueryVariables = {};


type Unnamed_9_Query = { readonly allShopifyProduct: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ShopifyProduct, 'id' | 'title' | 'tags' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
        & { readonly variants: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
          & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
        )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductImages, 'id' | 'originalSrc'>
          & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
        )>>> }
      ) }> } };

type Unnamed_10_QueryVariables = {};


type Unnamed_10_Query = { readonly prismic: { readonly allCommons: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: Pick<PRISMIC_Common, 'top_header_color' | 'special_notice_title' | 'header_notice_switch'> }>>> } } };

type Unnamed_11_QueryVariables = {};


type Unnamed_11_Query = { readonly allShopifyProduct: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ShopifyProduct, 'id' | 'title' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
        & { readonly variants: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
          & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
        )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
          Pick<ShopifyProductImages, 'id' | 'originalSrc'>
          & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
        )>>> }
      ) }> } };

type Unnamed_12_QueryVariables = {};


type Unnamed_12_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

type Unnamed_13_QueryVariables = {};


type Unnamed_13_Query = { readonly prismic: { readonly allHomes: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: (
          Pick<PRISMIC_Home, 'banner' | 'banner_button_text' | 'banner_subtitle' | 'banner_title' | 'call_us_banner' | 'call_us_button_text' | 'call_us_title' | 'how_it_works_subtitle' | 'how_it_works_title' | 'trending_block_title' | 'view_more_text'>
          & { readonly category_block: Maybe<ReadonlyArray<(
            Pick<PRISMIC_HomeCategory_block, 'category_slug' | 'category_title' | 'image'>
            & { readonly imageSharp: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
          )>>, readonly how_it_works_group: Maybe<ReadonlyArray<Pick<PRISMIC_HomeHow_it_works_group, 'title' | 'description' | 'image'>>> }
        ) }>>> } } };

type Unnamed_14_QueryVariables = {};


type Unnamed_14_Query = { readonly prismic: { readonly allHomemoderns: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: Pick<PRISMIC_Homemodern, 'banner_title' | 'banner_subtitle' | 'banner_image'> }>>> }, readonly allCommons: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: { readonly ad_blocks: Maybe<ReadonlyArray<Pick<PRISMIC_CommonAd_blocks, 'badge_title' | 'badge_color' | 'title' | 'block_image' | 'short_description' | 'add_a_button' | 'button_title'>>> } }>>> } } };

type Unnamed_15_QueryVariables = {};


type Unnamed_15_Query = { readonly prismic: { readonly allHomeminimals: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: (
          Pick<PRISMIC_Homeminimal, 'banner_title' | 'banner_subtitle' | 'banner_button_text' | 'banner_image' | 'call_us_banner' | 'call_us_banner_content' | 'call_us_button_text'>
          & { readonly how_it_works: Maybe<ReadonlyArray<Pick<PRISMIC_HomeminimalHow_it_works, 'thumbnail' | 'title' | 'short_description'>>> }
        ) }>>> }, readonly allHomes: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: (
          Pick<PRISMIC_Home, 'category_section_title' | 'category_section_short_intro'>
          & { readonly category_block: Maybe<ReadonlyArray<(
            Pick<PRISMIC_HomeCategory_block, 'category_slug' | 'category_title' | 'image'>
            & { readonly imageSharp: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
          )>> }
        ) }>>> }, readonly allCommons: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: { readonly ad_blocks: Maybe<ReadonlyArray<Pick<PRISMIC_CommonAd_blocks, 'badge_title' | 'badge_color' | 'title' | 'block_image' | 'short_description' | 'add_a_button' | 'button_title'>>> } }>>> } } };

type Unnamed_16_QueryVariables = {
  handle: Scalars['String'];
};


type Unnamed_16_Query = { readonly shopifyCollection: Maybe<{ readonly image: Maybe<(
      Pick<ShopifyCollectionImage, 'id' | 'src'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
    )>, readonly products: Maybe<ReadonlyArray<Maybe<(
      Pick<ShopifyProduct, 'id' | 'title' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
      & { readonly variants: Maybe<ReadonlyArray<Maybe<(
        Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
        & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
      )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
        Pick<ShopifyProductImages, 'id' | 'originalSrc'>
        & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
      )>>> }
    )>>> }> };

type Unnamed_17_QueryVariables = {
  handle: Scalars['String'];
};


type Unnamed_17_Query = { readonly shopifyCollection: Maybe<{ readonly image: Maybe<(
      Pick<ShopifyCollectionImage, 'id' | 'src'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
    )>, readonly products: Maybe<ReadonlyArray<Maybe<(
      Pick<ShopifyProduct, 'id' | 'title' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
      & { readonly variants: Maybe<ReadonlyArray<Maybe<(
        Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
        & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
      )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
        Pick<ShopifyProductImages, 'id' | 'originalSrc'>
        & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
      )>>> }
    )>>> }> };

type Unnamed_18_QueryVariables = {
  handle: Scalars['String'];
};


type Unnamed_18_Query = { readonly shopifyCollection: Maybe<{ readonly image: Maybe<(
      Pick<ShopifyCollectionImage, 'id' | 'src'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
    )>, readonly products: Maybe<ReadonlyArray<Maybe<(
      Pick<ShopifyProduct, 'id' | 'title' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
      & { readonly variants: Maybe<ReadonlyArray<Maybe<(
        Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
        & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
      )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
        Pick<ShopifyProductImages, 'id' | 'originalSrc'>
        & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
      )>>> }
    )>>> }> };

type Unnamed_19_QueryVariables = {
  handle: Scalars['String'];
};


type Unnamed_19_Query = { readonly shopifyProduct: Maybe<(
    Pick<ShopifyProduct, 'title' | 'description' | 'tags' | 'createdAt' | 'shopifyId' | 'availableForSale'>
    & { readonly variants: Maybe<ReadonlyArray<Maybe<(
      Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
      & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
    )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
      Pick<ShopifyProductImages, 'id' | 'originalSrc'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
    )>>> }
  )>, readonly shopifyCollection: Maybe<{ readonly products: Maybe<ReadonlyArray<Maybe<(
      Pick<ShopifyProduct, 'id' | 'title' | 'handle' | 'createdAt' | 'shopifyId' | 'availableForSale'>
      & { readonly variants: Maybe<ReadonlyArray<Maybe<(
        Pick<ShopifyProductVariant, 'id' | 'price' | 'shopifyId' | 'availableForSale'>
        & { readonly priceV2: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
      )>>>, readonly images: Maybe<ReadonlyArray<Maybe<(
        Pick<ShopifyProductImages, 'id' | 'originalSrc'>
        & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebp_tracedSVGFragment> }> }> }
      )>>> }
    )>>> }>, readonly prismic: { readonly allHomeminimals: { readonly edges: Maybe<ReadonlyArray<Maybe<{ readonly node: Pick<PRISMIC_Homeminimal, 'call_us_banner' | 'call_us_banner_content' | 'call_us_button_text'> }>>> } } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}