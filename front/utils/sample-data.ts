import { Survey } from '../interfaces'

/** Dummy survey data. */
export const sampleSurveys: Survey[] = [
  {
    id: 'test01',
    published: true,
    started_at: '2021-01-01 12:00',
    ended_at: '2022-01-01 12:00',
    questions: [
      {
        id: 1,
        type: 'text_field',
        field: 'name1',
        label: 'Hoge',
      },
      {
        id: 2,
        type: 'text_area',
        field: 'name2',
        label: 'Hoge',
      },
      {
        id: 3,
        type: 'radio_button',
        field: 'name1',
        label: 'Hoge',
      },
      {
        id: 4,
        type: 'check_box',
        field: 'name1',
        label: 'Hoge',
      },
      {
        id: 5,
        type: 'select_box',
        field: 'name5',
        label: 'Fuga',
        options: [
          {
            label: "Admin",
            value: "admin",
          },
          {
            label: "User",
            value: "user",
          }
      ]
      },
    ],
    pages: [
      {
        pageNum: 1,
        questionIds: [1,2,3]
      }
    ]
  },
  {
    id: 'test02',
    published: true,
    started_at: '2021-01-01 12:00',
    ended_at: '2022-01-01 12:00',
    questions: [
      {
        id: 1,
        type: 'textfield',
        label: 'Hoge',
      },
      {
        id: 2,
        type: 'checkbox',
        options: ['A', 'B'],
        label: 'Hoge',
      },
      {
        id: 3,
        type: 'textarea',
        label: 'Hoge',
      },
    ],
    pages: [
      {
        pageNum: 1,
        questionIds: [1,2,3]
      }
    ]
  },
]