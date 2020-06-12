export interface Payment {
    id: number;
    
}


export const priorities = ['Kort', 'Swish', 'PayPal'];
export const tasks = [{
  id: 0,
  subject: 'Choose between PPO and HMO Health Plan',
  priority: 'Kort'
}, {
  id: 1,
  subject: 'Non-Compete Agreements',
  priority: 'Swish'
}, {
  id: 2,
  subject: 'Comment on Revenue Projections',
  priority: 'PayPal'
}];