// @ts-ignore
/* eslint-disable */
import request from '@/services/apiClient';

/** 此处后端没有提供注释 POST /user/add */
export async function addUser(body: API.AddRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseLong>('/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/delete */
export async function deleteUser(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseBoolean>('/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/get/${param0} */
export async function getUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponseUserVo>(`/user/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/getMyInfo */
export async function getMyInfo(options?: { [key: string]: any }) {
  return request<API.ApiResponseUserVo>('/user/getMyInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/list */
export async function listUser(body: API.ListRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseListUserVo>('/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/login */
export async function login(body: API.RegisterRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseUserVo>('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.ApiResponseBoolean>('/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/register */
export async function register(body: API.RegisterRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseLong>('/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/update */
export async function updateUser(body: API.UpdateRequest, options?: { [key: string]: any }) {
  return request<API.ApiResponseBoolean>('/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/updateMyInfo */
export async function updateMyInfo(
  body: API.UpdateMyInfoRequest,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponseBoolean>('/user/updateMyInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
