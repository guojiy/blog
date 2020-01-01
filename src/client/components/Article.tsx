import * as React from 'react'

class Article extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{background: 'lightgreen'}}>首页</h1>
                <h1>设计模式是什么？</h1>
                <p><strong>设计模式</strong>是软件设计中常见问题的典型解决方案<span>。</span><span> </span>它们就像能根据需求进行调整的预制蓝图<span >，</span><span> </span>可用于解决代码中反复出现的设计问题<span >。</span><span> </span></p>
                <p>设计模式与方法或库的使用方式不同<span >，</span><span> </span>你很难直接在自己的程序中套用某个设计模式<span >。</span><span> </span>模式并不是一段特定的代码<span >，</span><span> </span>而是解决特定问题的一般性概念<span >。</span><span> </span>你可以根据模式来实现符合自己程序实际所需的解决方案<span >。</span><span> </span></p>
                <p>人们常常会混淆模式和算法<span >，</span><span> </span>因为两者在概念上都是已知特定问题的典型解决方案<span >。</span><span> </span>但算法总是明确定义达成特定目标所需的一系列步骤<span >，</span><span> </span>而模式则是对解决方案的更高层次描述<span >。</span><span> </span>同一模式在两个不同程序中的实现代码可能会不一样<span >。</span><span> </span></p>
                <p>算法更像是菜谱<span >：</span><span> </span>提供达成目标的明确步骤<span >。</span><span> </span>而模式更像是蓝图<span >：</span><span> </span>你可以看到最终的结果和模式的功能<span >，</span><span> </span>但需要自己确定实现步骤<span >。</span><span> </span></p>
            </div>
        )
    }
}

export default Article;