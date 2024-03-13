import { ArticleList } from './ArticleList'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Article, ArticleView } from 'entities/Article'
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article'

export default {
  title    : 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes : {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />

const article: Article = {
  'id': '1',
  'title': 'Javascript news',
  'subtitle': 'Что нового в JS за 2022 год?',
  'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  'views': 1022,
  'createdAt': '26.02.2022',
  user: {
    'id': '1',
    'username': 'admin',
  },
  'type': [ArticleType.IT],
  'blocks': [
    {
      'id': '7',
      'type': ArticleBlockType.TEXT,
      'title': 'Заголовок этого блока',
      'paragraphs': [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
  ]
}

const articles = new Array(9).fill(0).map((item, i) => ({ ...article, id: i.toString() }))

export const Small = Template.bind({})
Small.args = {
  view: ArticleView.SMALL,
  articles
}

export const Big = Template.bind({})
Big.args = {
  view: ArticleView.BIG,
  articles
}

export const LoadingSmall = Template.bind({})
LoadingSmall.args = {
  isLoading: true,
  view: ArticleView.SMALL,
  articles
}

export const LoadingBig = Template.bind({})
LoadingBig.args = {
  isLoading: true,
  view: ArticleView.BIG,
  articles
}
