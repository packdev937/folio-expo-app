function useGetFeed(
  id: number | null,
) {
  const data = id ? {
    id: id,
    imageUri: 'https://yt3.ggpht.com/TsJWAOUF7m8mV4tPlJ_6s2CZ3N1WJeiXPfK7vtfPgF8CgHIs9z7279CbOzx8O1U6ZcmGJzzyEF3fAA=s1024-c-fcrop64=1,000011deffffbddd-nd-v1',
    accessRange: '전체 공개',
    createdAt: '2024-08-01',
    taggedUsers: [
      {id: 1, nickname: 'packdev937', profileUri: 'https://mblogthumb-phinf.pstatic.net/MjAyMjAzMDFfNDYg/MDAxNjQ2MTQxMTIwMzI5.XkigsLvkJYO2iOnUOhgUAzWUGaFXPHuXt1hGFyHUnjUg.voVbKU-6IorxlvRk3TuOjRtERCYt7zJeUx88fz0ivgEg.PNG.evui2000/SE-1f0d7981-6393-460e-955d-edb5abee306a.png?type=w800'},
      {id: 2, nickname: 'yeddin', profileUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAl9CIOTnztaFIacYX4gWWA-0ZvW5o9kHCg&s'},
      {id: 3, nickname: 'seoyun', profileUri: 'https://i.pinimg.com/236x/9d/41/8f/9d418f7fa0efa34d8fe2089d256c4107.jpg'},
    ]
  } : null;

  return data;
}

export default useGetFeed;
