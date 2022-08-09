<ReflexContainer orientation='horizontal'>
{/* 고정 Header */}
<ReflexElement>
  <Header />
</ReflexElement>

{/* Header 아래 내용 */}
<ReflexElement>
  {/* 내용 내부 resizable */}
  <ReflexContainer orientation="vertical" style={{height: 'calc(100vh - 40px)'}}>
    {/* 왼쪽 nav */}
    <ReflexElement className='left-pane' minSize='100' maxSize='300' style={{height: 'calc(100vh - 40px)', overflow: 'hidden'}} propagateDimensions={true} propagateDimensionsRate={200} >
      <Nav />
    </ReflexElement>

    <ReflexSplitter className="reflex-thin" />

      {/* 중간 content */}
      <ReflexElement  className='middle-pane' style={{height: 'calc(100vh - 40px)'}}>
        <ReflexContainer orientation='horizontal'>
          <ReflexElement minSize={minHeight}>
            <ContentOne />
          </ReflexElement>
          
          <ReflexSplitter className="reflex-thin" />

          <ReflexElement  minSize={minHeight}>
            <ContentTwo />
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>

      <ReflexSplitter className="reflex-thin" />

      {/* 오른쪽 content */}
      <ReflexElement className='right-pane' style={{height: 'calc(100vh - 40px)'}} minSize={minWidthLeftPane} maxSize={window.screen.width / 6} >
        <ReflexContainer orientation='horizontal'>
          <ReflexElement minSize={minHeight}>
            <ContentThree />
          </ReflexElement>

          <ReflexSplitter className="reflex-thin" />

          <ReflexElement minSize={minHeight}>
            <Calllist />
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>

  </ReflexContainer>

</ReflexElement>
</ReflexContainer>