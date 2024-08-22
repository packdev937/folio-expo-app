type AccessRange = Record<'PUBLIC' | 'FRIENDS' | 'PRIVATE', string>;


interface Feed {
  id: number,
  imageUri: string,
}
