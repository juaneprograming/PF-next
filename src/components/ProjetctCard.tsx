import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader } from './ui/card'
import { Github, Link2Icon} from 'lucide-react'
import { Badge } from './ui/badge'



const ProjetctCard = ({ project }) => {
  return (
  <Card>
    <CardHeader>card header</CardHeader>
    <div className='h-full px-8 py-6'>
      <Badge>{project.category}</Badge>
      <h4 className='h4 mb-1'>{project.name}</h4>
      <p className='text-muted-foreground text-lg'>{project.description}</p>
    </div>
  </Card>
  )
}

export default ProjetctCard