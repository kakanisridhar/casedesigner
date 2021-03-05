export enum ComponentType {
  Component,
  FlowContainer,
  GridContainer,
}

export interface IComponent {
  name: string;
  type: ComponentType;
  props?: {};
}

export interface IComponentsByCategory {
  [key: string]: IComponent[];
}

export interface IWidget extends IComponent {
  id: string;
  childrenId?: string[];
  parentId?: string;
}

export interface IDroppable {
  id?: string;
  name?: string;
  type: ComponentType;
}

export const ROOT = "root";
