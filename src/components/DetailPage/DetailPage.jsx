import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { sliderConfig } from '../../utils/sliderConfg'
import { MovieCard } from '../Movie/MovieCard'
import Slider from 'react-slick'
import useDetailPage from '../../hooks/useDetailPage'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { AppBar, Tabs, Box, IconButton, Tab, Modal } from '@mui/material'

import './DetailPage.css'
import '../Home/HomeRow.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>
}

export function DetailPage() {
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { movieId } = useParams()
  const { singleMovie, recommended, videos, cast } = useDetailPage(movieId)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const backgroundImage =
    singleMovie && singleMovie['backdrop_path']
      ? `url(https://image.tmdb.org/t/p/w1280/${singleMovie['backdrop_path']})`
      : 'background-color: rgb(59, 58, 59)'

  return (
    <>
      <main className='detailPage'>
        <div className='fixed w-full z-0'>
          <div className='overlay'></div>
          <img
            className='bg-cover bg-center h-screen w-full opacity-50'
            style={{
              backgroundImage: backgroundImage
            }}
          ></img>
        </div>
        <div className='pt-[30vh] pl-[75px] text-white relative self-center w-full'>
          <div className='detailPage__container'>
            <h1 className='text-zinc-100 text-5xl mb-6 font-bold'>
              {singleMovie['title']}
            </h1>
            <div className='data text-[13px]'>
              <span className=''>{singleMovie['release_date']}</span>
              <span className=''>{singleMovie['runtime'] + ' minutes'}</span>
            </div>
            <div className='genres mb-[35px] text-[13px]'>
              {Array.isArray(singleMovie.genres) == true
                ? singleMovie.genres.map((genre, index) => (
                    <span key={index} className=''>
                      {genre.name}
                    </span>
                  ))
                : null}
            </div>
            <div className='buttons mb-5'>
              <Button className='playBtn' startIcon={<PlayArrowIcon />}>
                Watch Now
              </Button>
              <Button className='trailerBtn' onClick={handleOpen}>
                Trailer
              </Button>
              <IconButton size='small' className='addBtn'>
                <AddIcon />
              </IconButton>
            </div>
            <Modal open={open} onClose={handleClose}>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-1 w-3/4'>
                {videos.length > 0 ? (
                  <iframe
                    className='w-full'
                    height='515'
                    src={`https://www.youtube.com/embed/${videos[0].key}`}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p>No trailer available</p>
                )}
              </div>
            </Modal>
            <div className='max-w-[800px] text-base mb-10'>
              <p className='text-xl'>{singleMovie['overview']}</p>
            </div>
            <AppBar className='tabsHeader' position='static'>
              <Tabs value={value} onChange={handleChange}>
                <Tab className={value === 0 ? 'active' : ''} label='Suggestions' />
                <Tab className={value === 1 ? 'active' : ''} label='Extras' />
                <Tab className={value === 2 ? 'active' : ''} label='Details' />
              </Tabs>
            </AppBar>
            <TabPanel className='tabPanel' value={value} index={0}>
              <Slider className='homeSlider' {...sliderConfig}>
                {recommended.map((recommendedSingleMovie) => (
                  <div className='relative p-2' key={recommendedSingleMovie.id}>
                    <MovieCard
                      key={recommendedSingleMovie.id}
                      movie={recommendedSingleMovie}
                    />
                  </div>
                ))}
              </Slider>
            </TabPanel>
            <TabPanel className='tabPanel' value={value} index={1}>
              {videos.length > 0 ? (
                videos.slice(0, 1).map((video, index) => (
                  <div key={index}>
                    <iframe
                      width='260'
                      height='150'
                      src={`https://www.youtube.com/embed/${video.key}`}
                      allowFullScreen
                    ></iframe>
                    <p className='mt-2'>Trailer | {singleMovie.title}</p>
                  </div>
                ))
              ) : (
                <p>There isn´t extra content</p>
              )}
            </TabPanel>
            <TabPanel className='tabPanel' value={value} index={2}>
              <div className='flex'>
                <div className='flex-[0.5]'>
                  <h2 className='mb-3 font-bold text-3xl'>{singleMovie['title']}</h2>
                  <p className='mb-3 text-xl'>{singleMovie['overview']}</p>
                </div>
                <div className='itemsColumn'>
                  <div className=''>
                    <div className='mb-4'>
                      <h3 className='text-sm text-zinc-300 font-thin mb-[2px]'>
                        Duration:
                      </h3>
                      <p>{singleMovie['runtime']} minutes</p>
                    </div>
                    <div className='mb-4'>
                      <h3 className='text-sm text-zinc-300 font-thin mb-[2px]'>
                        Release Date:
                      </h3>
                      <p>{singleMovie['release_date']}</p>
                    </div>
                    <div className='mb-4'>
                      <h3 className='text-sm text-zinc-300 font-thin mb-[2px]'>
                        Genres:
                      </h3>
                      <div className='genres'>
                        {Array.isArray(singleMovie.genres) == true
                          ? singleMovie.genres.slice(0, 3).map((genre, index) => (
                              <span key={index} className=''>
                                {genre.name}
                              </span>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <div className='mb-4'>
                      <h3 className='text-sm text-zinc-300 font-thin mb-[2px]'>Cast:</h3>
                      {cast.slice(0, 4).map((actor, index) => (
                        <p key={index}>{actor.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </main>
    </>
  )
}
