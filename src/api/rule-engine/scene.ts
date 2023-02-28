import server from '@/utils/request';


export const modify = (id: string, data: any) => server.put(`/scene/${id}`, data)

export const save = (data: any) => server.post(`/scene`, data)

export const detail = (id: string) => server.get(`/scene/${id}`)

export const query = (data: any) => server.post('/scene/_query/',data);

export const _delete = (id: string) => server.remove(`/scene/${id}/`);

export const _action = (id: string, type: '_disable' | '_enable') => server.put(`/scene/${id}/${type}`);

/**
 * 手动触发
 * @param id 
 * @returns 
 */
export const _execute = (id: string) => server.post(`/scene/${id}/_execute`);