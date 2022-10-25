/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */

// 控制器名称
const controller = 'category'
const service = ''
const gateway = 'default'

export const CategoryController = {
  // 创建分类
  createCategory: {
    gateway,
    service,
    controller,
    path: '/api/admin/category',
    action: 'createCategory',
    type: RequestMethod.Post,
  },
  // 查询分类
  findCategory: {
    gateway,
    service,
    controller,
    path: '/api/admin/category',
    action: 'findCategory',
    type: RequestMethod.Get,
  },
  // 更新分类
  updateCategory: {
    gateway,
    service,
    controller,
    path: '/api/admin/category/{id}',
    action: 'updateCategory',
    type: RequestMethod.Put,
  },
  // 获取分类
  getCategory: {
    gateway,
    service,
    controller,
    path: '/api/admin/category/{id}',
    action: 'getCategory',
    type: RequestMethod.Get,
  },
  // 删除分类
  deleteCategory: {
    gateway,
    service,
    controller,
    path: '/api/admin/category/{id}',
    action: 'deleteCategory',
    type: RequestMethod.Delete,
  },
}
