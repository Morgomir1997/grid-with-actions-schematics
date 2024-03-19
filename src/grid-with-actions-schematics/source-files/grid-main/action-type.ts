export type ActionTypeWithoutNull = 'Action1' | 'Action2' | 'Action3';

export type ActionType = ActionTypeWithoutNull | null;

export const actionTitle: {[key in ActionTypeWithoutNull]: string} = {
  'Action1': 'Action 1',
  'Action2': 'Action 2',
  'Action3': 'Action 3',
}